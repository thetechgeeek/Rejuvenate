//using router.js which provides an API for handling routes

import express from 'express';
import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
} from '../controllers/userControllers.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
const router = express.Router();

router.post('/', registerUser);
router.post('/login', authUser);
router
  .route('/profile')
  .get(authMiddleware, getUserProfile)
  .put(authMiddleware, updateUserProfile);

export default router;
