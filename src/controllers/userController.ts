import { Request, Response } from 'express';
import IUser from '../interfaces/IUser';
import * as userService from '../services/userService';

export default async function addUser(req: Request, res: Response) {
  const user = req.body as IUser;
  const token = await userService.default(user);

  return res.status(201).json({ token });
}