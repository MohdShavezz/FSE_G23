import express from 'express'
import { addProduct, getProducts } from '../controllers/product.controller.js'

const router=express.Router()

// router.route('/products').get(getProducts).post(addProduct)

router.get('/products',getProducts)
router.post('/products',addProduct)

export default router