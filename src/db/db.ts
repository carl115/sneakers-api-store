import { connect } from "mongoose";

export default async function connDB() {
    try {
        const db = await connect(process.env.MONGODB_CONNECTION || "")

        console.log('DB connected successfully')
    } catch (error) {
        console.log(error)   
    }
}