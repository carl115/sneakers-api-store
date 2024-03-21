import { Router } from 'express'
import { addUser, deleteUser, addTestUser, getUsers, updateUser } from '../controllers/UserController'

const router = Router()

router.get('/', getUsers)
router.post('/', addUser)
router.post('/user-test', addTestUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

export default router