import express from 'express';
import productRouter from './routes/productRoutes';
import userRouter from './routes/userRoutes';
import orderRouter from './routes/orderRoutes';
// eslint-disable-next-line import/no-named-as-default
import errorHandler from './middlewares/errorHandler';
import loginRouter from './routes/loginRoutes';

const app = express();

app.use(express.json());
app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/orders', orderRouter);
app.use('/login', loginRouter);
app.use(errorHandler);

export default app;
