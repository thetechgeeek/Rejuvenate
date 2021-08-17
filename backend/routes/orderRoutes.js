//using router.js which provides an API for handling routes

import express from 'express';
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
} from '../controllers/orderControllers.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
const router = express.Router();

router.route('/').post(authMiddleware, addOrderItems);
router.route('/:id').get(authMiddleware, getOrderById);
router.route('/:id/pay').put(authMiddleware, updateOrderToPaid);

export default router;
