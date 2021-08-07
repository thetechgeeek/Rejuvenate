//using router.js which provides an API for handling routes

import express from 'express';
import { authUser } from '../controllers/userControllers.js';
const router = express.Router();

router.post('/login', authUser);

export default router;
