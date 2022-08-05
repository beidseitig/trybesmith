import connection from './connection';
import IOrder from '../interfaces/iOrder';

export default async function getAll(): Promise<IOrder[]> {
  const [result] = await connection.execute(' SELECT * FROM Trybesmith.Orders');

  return result as IOrder[];
}