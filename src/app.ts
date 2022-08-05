import express from 'express';
import productRouter from './routes/productRoutes';
import userRouter from './routes/userRoutes';
import orderRouter from './routes/orderRoutes';
import handler from './middlewares/errorHandler';
import loginRouter from './routes/loginRoutes';

const app = express();

app.use(express.json());
app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/orders', orderRouter);
app.use('/login', loginRouter);
app.use(handler);

export default app;
