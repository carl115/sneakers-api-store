import { Response, Request } from 'express'
import { User } from '../models/Users'
import { UserReq, UserType } from '../types'

export const getUsers = async (_req: any, res: Response) => {
  const users = await User.find()
  res.json(users)
}

export const addUser = async (req: Request, res: Response) => {
  try {
    const userData: UserReq = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    };

    await User.create(userData)

    res.json({ message: "Test User created" })
  } catch (error) {
    console.error(error)
    res.status(400).json({ messageError: "Error creating user" })
  }
}

export const updateUser = async (req: any, res: Response) => {
  try {
    const userData: UserType = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      createdAt: req.body.createdAt
    }

    await User.findByIdAndUpdate(req.params.id, userData)

    res.json({ message: "User updated" })
  } catch (error) {
    console.error(error)
    res.status(400).json({ messageError: "Error updating user" })
  }
}

export const deleteUser = async (req: any, res: Response) => {
  await User.deleteOne({ _id: req.params.id })

  res.sendStatus(204)
}