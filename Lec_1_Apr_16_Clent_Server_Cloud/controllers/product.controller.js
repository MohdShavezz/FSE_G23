import { Product } from "../models/product.model.js"

export const getProducts =async(req,res)=>{
    const products= await Product.find()
    res.status(200).json({success:true,products})
}
export const addProduct =async(req,res)=>{
    const {name,price}=req.body
    const product= await Product.insertOne({name,price})
    res.status(201).json({success:true,product})
}

