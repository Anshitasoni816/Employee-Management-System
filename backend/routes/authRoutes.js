import express from 'express'
import authController from '../controllers/authController.js'
import verifyUser from '../middleware/authMiddleware.js'

const router = express.Router()

router.post('/login', authController.login)
router.get('/verify', verifyUser, authController.verify)


export default router;