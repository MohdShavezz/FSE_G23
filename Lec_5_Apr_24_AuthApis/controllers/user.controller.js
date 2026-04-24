import { User } from "../modals/User.js"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import transporter from "../utils/sendEmail.js"


export const registerService = async (req, res) => {
    try {
        //db interaction
        const { username, email, password } = req.body

        // email exist (duplicate registration prevent)
        const user = await User.findOne({ email })
        // console.log(user)
        if (user) {
            return res.send('user already registered.')
        }

        //fresh user
        // hash password
        const hashPass = await bcrypt.hash(password, 10)

        //create 
        const u = await User.insertOne({ username, email, password: hashPass })
        res.status(201).json({ success: true, message: 'registration success', user: u })

    } catch (error) {
        console.log('error in registration', error.message)
    }
}
export const loginService = async (req, res) => {
    try {
        //db interaction
        const { email, password } = req.body

        // email exist (duplicate registration prevent)
        const user = await User.findOne({ email })
        // console.log(user)
        if (!user) {
            return res.send('register first.')
        }
        // already registered

        // check password
        const isPass= await bcrypt.compare(password,user.password) // true/false
        if(!isPass){
            return res.status(404).json({success:false,message:'invalid creds.'})
        }

        // token 
        const token = jwt.sign({ userId: user.id }, process.env.jWT_SECRET, { expiresIn: '1d' })

        res.status(201).json({
            success: true,
            message: 'login success',
            user,
            token
        })

    } catch (error) {
        console.log('error in registration', error.message)
    }
}

export const forgotPassword=async(req,res)=>{
    try {
        const {email}=req.body;
        const user=await User.findOne({email})
        if(!user){
            return res.status(401).send('register first.')
        }
        // if user present in db
        // token
        const token= jwt.sign({userId:user._id},process.env.jWT_SECRET,{expiresIn:'60s'})

        // send token in email
        await transporter.sendMail({
            to:email,
            subject:'Reset Password Link',
            html:`
                <h2> Use this token to reset your password  </h2>
                <p> ${token} </p>
            `
        })
        res.status(200).send('Check your email.')

    } catch (error) {
        console.log('error in forgotPassword',error)        
    }
}
export const resetPassword=async(req,res)=>{
    try {
        const {token,newpassword}=req.body;
        const decoded= await jwt.decode(token,process.env.jWT_SECRET)
        await jwt.verify(token,process.env.jWT_SECRET)    
        const user= await User.findById(decoded.userId)
        if(!user){
            return res.status(401).send('invalid user')
        }
        //password reset
        const hashPass= await bcrypt.hash(newpassword,10)
        user.password=hashPass
        await user.save()
      
        res.status(200).send('password reset sucessfully')

    } catch (error) {
        console.log('error in forgotPassword',error.message)        
    }
}