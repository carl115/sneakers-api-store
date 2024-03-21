import { connect } from "mongoose";

export default async function connDB() {
    try {
        const db = await connect("mongodb://localhost:27017/sneakersapi")

        console.log('DB connected successfully');
    } catch (error) {
        console.log(error)   
    }
}