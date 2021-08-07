//using router.js which provides an API for handling routes

import express, { Router } from 'express';
import {
  getProducts,
  getProductsById,
} from '../controllers/productControllers';
const router = express.Router();

router.route('/').get(getProducts);
router.route('/:id').get(getProductsById);

export default router;
