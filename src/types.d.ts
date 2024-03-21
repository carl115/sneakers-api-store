export interface ProductType {
    img: string,
    name: string,
    description: string,
    price: number,
    special_discount: number
}

export interface UserType {
    name: string,
    email: string,
    password: string,
    createdAt: Date
}

type UserReq = Omit<UserType, 'createdAt'> 