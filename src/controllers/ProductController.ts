import { Response, Request } from 'express'
import { Product } from '../models/Products'
import { ProductType } from '../types'
import { User } from '../models/Users'
import { calculateTime } from '../helpers/CalculateTime'

export const getProducts = async (_req: Request, res: Response) => {
    const products = await Product.find()
    res.json(products)
}

export const getProduct = async (req: Request, res: Response) => {
    const product = await Product.findById(req.params.id)
    res.json(product)
}

export const getDiscount = async (req: Request, res: Response) => {
    try {
        const user: any = await User.findById(req.params.userId)
        const product: any = await Product.findOne({ name: req.params.productName })
        
        const userCreated = await calculateTime(user.createdAt)

        if (userCreated == 0) {
            res.json({
                img: product.img,
                name: product.name,
                description: product.description,
                price: product.price * product.special_discount / 100
            })
        }
        else {
            res.json(product)
        }
    } catch (error) {
        console.error(error)
        res.status(400).json({ messageError: "Product or User not found" })
    }
}

export const addProduct = async (req: Request, res: Response) => {
    try {
        const productData: ProductType = {
            img: req.body.img,
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            special_discount: req.body.special_discount
        }

        await Product.create(productData)

        res.json({ message: "Product created" })
    } catch (error) {
        console.error(error)
        res.status(400).json({ messageError: "Error creating product" })
    }
}

export const updateProduct = async (req: Request, res: Response) => {
    try {
        const productData: ProductType = {
            img: req.body.img,
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            special_discount: req.body.special_discount
        }

        await Product.findByIdAndUpdate(req.params.id, productData)

        res.json({ message: "Product updated" })
    } catch (error) {
        console.error(error)
        res.status(400).json({ messageError: "Error creating product" })
    }
}

export const deleteProduct = async (req: any, res: Response) => {
    await Product.deleteOne({ _id: req.params.id })

    res.sendStatus(204)
}
