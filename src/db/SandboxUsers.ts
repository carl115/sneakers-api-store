import { User } from '../models/Users'
import { UserType } from '../types'

export async function generateUsers() {
    const users: UserType[] = [
        {
            "name": "CarlosFCHO",
            "email": "FCLOS@gmail.com",
            "password": "24%ajslao66",
            "createdAt": new Date()
        },
        {
            "name": "Rodrigof",
            "email": "elrodri28@gmail.com",
            "password": "gutlkasjla87",
            //Users older than 1 month don't receive special discount
            "createdAt": new Date("2024/02/12")
        }
    ]

    try {
        await User.insertMany(users)

        console.log('Test user created')   
    } catch (error) {
        console.error(error)
    }
}