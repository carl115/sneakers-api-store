import { Router } from 'express'
import { getProducts, getDiscount, getProduct, addProduct, updateProduct, deleteProduct } from '../controllers/ProductController'

const router = Router()

router.get('/products', getProducts)
router.get('/products/:id', getProduct)
router.get(`/products/price/:userId/:productName`, getDiscount)
router.post('/products', addProduct)
router.put('/products/:id', updateProduct)
router.delete('/products/:id', deleteProduct)

export default router