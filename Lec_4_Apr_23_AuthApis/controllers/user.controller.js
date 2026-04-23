import { User } from "../modals/User.js"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'


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