import { Router } from 'express';
import * as userController from '../controllers/userController';

const userRouter = Router();

userRouter.post('/', userController.default);

export default userRouter;