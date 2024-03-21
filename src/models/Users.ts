import { Schema, model } from 'mongoose'
import { UserType } from '../types'

const UserSchema = new Schema<UserType>({
    name: { type: String },
    email: { type: String },
    password: { type: String },
    createdAt: { type: Date, default: Date.now }
})

export const User = model<UserType>('User', UserSchema)