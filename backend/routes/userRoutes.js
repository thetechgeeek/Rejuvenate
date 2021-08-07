//using router.js which provides an API for handling routes

import express, { Router } from 'express';
import { authUser } from '../controllers/userControllers';
const router = express.Router();

router.post('/login', authUser);

export default router;
