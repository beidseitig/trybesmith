import IProduct from '../interfaces/IProduct';
import * as productModel from '../models/productModel';

export async function addProduct(product: IProduct) {
  const result = await productModel.addProduct(product);
  return result;
}

export async function getAll() {
  const result = await productModel.getAll();
  return result;
}