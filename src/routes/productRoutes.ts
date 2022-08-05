import { Router } from 'express';
import * as productController from '../controllers/productController';

const productRouter = Router();

productRouter.post('/', productController.addProduct);
productRouter.get('/', productController.getAll);

export default productRouter;