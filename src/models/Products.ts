import { Schema, model } from 'mongoose'
import { ProductType } from '../types'

const ProductSchema = new Schema<ProductType>({
    img: { type: String },
    name: { type: String },
    description: { type: String },
    price: { type: Number },
    special_discount: { type: Number }
})

export const Product = model<ProductType>('Product', ProductSchema)