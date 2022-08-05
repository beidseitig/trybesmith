import { Request, Response, NextFunction } from 'express';
import IProduct from '../interfaces/IProduct';
import * as productService from '../services/productService';

export async function addProduct(req: Request, res: Response, next: NextFunction) {
  try {
    const product = req.body as IProduct;
    const newProduct = await productService.addProduct(product);

    return res.status(201).json(newProduct);
  } catch (err) {
    next(err);
  }
}

export async function getAll(_req: Request, res: Response, next: NextFunction) {
  try {
    const productList = await productService.getAll();
    
    res.status(200).json(productList);
  } catch (err) {
    next(err);
  }
}