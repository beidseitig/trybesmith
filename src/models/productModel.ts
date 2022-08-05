import { ResultSetHeader } from 'mysql2/promise';
import IProduct from '../interfaces/IProduct';
import connection from './connection';

export async function addProduct(product: IProduct): Promise<IProduct> {
  const { name, amount } = product;

  const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
  const values = [name, amount];

  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;

  const newProduct: IProduct = { id, name, amount };
  return newProduct;
}

export async function getAll(): Promise<IProduct[]> {
  const query = 'SELECT * FROM Trybesmith.Products';
  const [users] = await connection.execute(query);

  return users as IProduct[];
}