import { Router } from 'express';
import * as userController from '../controllers/userController';

const userRouter = Router();

userRouter.post('/login', userController.login);
userRouter.post('/', userController.addUser);

export default userRouter;