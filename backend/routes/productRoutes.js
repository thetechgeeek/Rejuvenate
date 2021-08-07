//using router.js which provides an API for handling routes

import express from 'express';
import {
  getProducts,
  getProductsById,
} from '../controllers/productControllers.js';
const router = express.Router();

router.route('/').get(getProducts);
router.route('/:id').get(getProductsById);

export default router;
