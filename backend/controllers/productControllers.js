//controller for handling the functionality for product routes
//fetches data from db (async process) and responds with json

import asyncHandler from 'express-async-handler';
import productModel from '../models/productModel.js';

//@desc  Fetch all products
//@route  GET /api/products
//@access  Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await productModel.find({});
  res.json(products);
});

//@desc  Fetch single Product
//@route  GET /api/products/:id
//@access  Public
const getProductsById = asyncHandler(async (req, res) => {
  const product = await productModel.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Product not found.');
  }
});

export { getProducts, getProductsById };
