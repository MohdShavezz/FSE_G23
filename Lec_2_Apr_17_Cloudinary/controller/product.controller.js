import cloudinary from '../config/cloudinary.js'
import {Product} from '../models/Product.js'
import path from 'path'


export const uploadLocalFile = async (req,res) => {
    try {
        const filePath=path.join(process.cwd(), 'public' , 'myimage.jpg') 
        // console.log('MYPATH=>',filePath)
        // return
        const result = await cloudinary.uploader.upload(filePath, {   // images upload
            public_id: 'pockey',
        })
        // {secure_url,public_id}=result
        const prod = await Product.insertOne({
            name: 'product 2',
            price: 200,
            images: [{
                url: result.secure_url,
                public_id: result.public_id
            }]
        })

        res.status(201).json(prod)

    } catch (error) {
        console.log('error in uploadLocalFile', error.message)
    }
}
export const uploadSinglePayload = async (req,res) => {
    try {
        const {name,price}=req.body 
        // req.file => path, filename
        // req.files.map(image=>image.path)

        const prod=await Product.create({
            name,
            price,
            images:[{
                url:req.file.path,
                public_id:req.file.filename
            }]
        })
        
        res.status(201).json(prod)

    } catch (error) {
        console.log('error in uploadLocalFile', error.message)
    }
}
export const deleteProduct = async (req,res) => {
    try {
        const productId=req.params.id 
        const prod=await Product.findById(productId)
        if(!prod){
            return res.status(404).send('product not found')
        }

        await cloudinary.uploader.destroy(prod.images[0].public_id) // delete file from cloudinay
        await Product.findByIdAndDelete(productId) // dlete prduct from database
        
        res.status(200).json('product dleted.')

    } catch (error) {
        console.log('error in uploadLocalFile', error.message)
    }
}