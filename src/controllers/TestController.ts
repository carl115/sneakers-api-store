import { Response, Request } from 'express'
import { generateProducts } from '../db/SandboxProducts'
import { generateUsers } from '../db/SandboxUsers'

export const generateTestData = async (_req:Request, res:Response) => {
    await generateUsers()
    await generateProducts()

    res.json({ message: 'Test data generated'})
}