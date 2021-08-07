import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();
connectDB();
const app = express();

//allows to access json data in req.body
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

//using custom errorMiddlware for handling errors and displaying
//json obj instead of html
app.use(notFound);
app.use(errorHandler);

app.listen(
  process.env.PORT || 5000,
  console.log(`Server runnig on port ${process.env.PORT}`)
);
