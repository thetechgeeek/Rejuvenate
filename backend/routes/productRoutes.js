//using router.js which provides an API for handling routes

import express from 'express';
import {
  deleteProduct,
  getProducts,
  getProductsById,
} from '../controllers/productControllers.js';
import { authMiddleware, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(getProducts);
router
  .route('/:id')
  .get(getProductsById)
  .delete(authMiddleware, admin, deleteProduct);

export default router;
