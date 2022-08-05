import { Request, Response, NextFunction } from 'express';
import IUser from '../interfaces/IUser';
import * as userService from '../services/userService';

export async function addUser(req: Request, res: Response) {
  const user = req.body as IUser;
  const token = await userService.addUser(user);

  return res.status(201).json({ token });
}

export async function login(req: Request, res: Response, next: NextFunction) {
  try {
    const user = req.body as IUser;
    const token = await userService.login(user);
    console.log(`Controller ${token}`);
  
    return res.status(200).json({ token });
  } catch (err) {
    next(err);
  }
}