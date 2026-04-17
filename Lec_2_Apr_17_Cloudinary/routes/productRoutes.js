import express from 'express'
import { deleteProduct, uploadLocalFile, uploadSinglePayload } from '../controller/product.controller.js'
import upload from '../config/upload.js'

const router=express.Router()

// router.route('/products').get(getProducts).post(addProduct)

router.post('/single_local',uploadLocalFile) // http://localhost:3000/api/product/single_local [POST]
router.post('/single',upload.single('image'), uploadSinglePayload) // http://localhost:3000/api/product/single {name,pric,image} [POST]
router.delete('/:id', deleteProduct) // http://localhost:3000/api/:id  [delete]

export default router