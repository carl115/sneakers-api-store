import { ProductType } from '../types'
import { Product } from '../models/Products'

export async function generateProducts() {
    const products: ProductType[] = [
        {
            "img": "https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/j/u/w/7-1522-multi-shozie-multicolor-original-imagegdaad9g8mvs-bb.jpeg?q=90&crop=false",
            "name": "Sneakers Casual",
            "description": "Sneakers Casual Shoes For Women - Pink",
            "price": 33.99,
            "special_discount": 60
        },
        {
            "img": "https://i.ytimg.com/vi/fkKnlMByZGc/maxresdefault.jpg",
            "name": "Sneakers Nike's Air Jordan",
            "description": "Nike's Air Jordan - Red",
            "price": 137,
            "special_discount": 75
        },
        {
            "img": "https://target.scene7.com/is/image/Target/GUEST_26599d16-d412-43a8-bd56-e65bfa8e5a4b?wid=488&hei=488&fmt=pjpeg",
            "name": "Levi Casual Court Sneakers",
            "description": "Levi Casual Court Sneakers / Goodfellow - Black&White",
            "price": 95.99,
            "special_discount": 45
        }
    ]

    try {
        await Product.insertMany(products)

        console.log('Test products created')   
    } catch (error) {
        console.error(error)
    }
}