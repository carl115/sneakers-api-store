import { generateTestData } from '../controllers/TestController'
import { Router } from 'express'

const router = Router()

router.get('/', generateTestData)