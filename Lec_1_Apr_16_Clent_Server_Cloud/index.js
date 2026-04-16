import express from 'express'
import dotenv from 'dotenv'
import productRouter from './routes/product.route.js'
import mongoose from 'mongoose'
dotenv.config()

const app = express()
app.use(express.json())
app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.send('this is default port')
})

app.use('/api',productRouter)

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('db connected.')
}).catch(err=>console.log(err.message))

app.listen(process.env.PORT,()=>{
    console.log('server is running on',process.env.PORT)
})