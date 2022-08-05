import { Router } from 'express';
import * as orderController from '../controllers/orderController';

const orderRouter = Router();

orderRouter.get('/', orderController.default);

export default orderRouter;