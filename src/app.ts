import express from 'express';
import productRouter from './routes/productRoutes';
import userRouter from './routes/userRoutes';

const app = express();

app.use(express.json());
app.use('/products', productRouter);
app.use('/users', userRouter);

export default app;
