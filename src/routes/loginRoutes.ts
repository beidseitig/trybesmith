import { Router } from 'express';
import * as userController from '../controllers/userController';

const loginRouter = Router();

loginRouter.post('/', userController.login);

export default loginRouter;