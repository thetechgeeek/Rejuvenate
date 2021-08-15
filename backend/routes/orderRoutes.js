//using router.js which provides an API for handling routes

import express from 'express';
import { addOrderItems } from '../controllers/orderControllers.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
const router = express.Router();

router.route('/').post(authMiddleware, addOrderItems);

export default router;
