import * as orderModel from '../models/orderModel';

export default async function getAll() {
  const result = await orderModel.default();
  return result;
}