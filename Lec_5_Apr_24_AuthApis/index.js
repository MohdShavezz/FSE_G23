import express from 'express'
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js'
import dbConn from './db/dbConn.js'
const app =express()

dotenv.config({
    // path:'./foler/.env'
})
app.use(express.json())

dbConn()

app.get('/user',(req,res)=>{
    res.send('default')
})

app.use('/api/user',userRoutes)


app.listen(process.env.PORT,()=>{
    console.log('server is running on',process.env.PORT)
})