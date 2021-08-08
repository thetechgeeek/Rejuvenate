//using router.js which provides an API for handling routes

import express from 'express';
import { authUser, getUserProfile } from '../controllers/userControllers.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
const router = express.Router();

router.post('/login', authUser);
router.route('/profile').get(authMiddleware, getUserProfile);

export default router;
