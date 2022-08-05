import { Request, Response, NextFunction } from 'express';
import * as orderService from '../services/orderService';

export default async function getAll(_req: Request, res: Response, next: NextFunction) {
  try {
    const orderList = await orderService.default();

    res.status(200).json(orderList);
  } catch (err) {
    next(err);
  }
}