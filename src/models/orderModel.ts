import connection from './connection';
import IOrder from '../interfaces/iOrder';

export default async function getAll(): Promise<IOrder[]> {
  const query = `
  SELECT
    t1.id, t1.userId, JSON_ARRAYAGG(t2.id) AS productsIds
  FROM 
    Trybesmith.Orders 
  AS
    t1
  INNER JOIN
    Trybesmith.Products
  AS 
    t2
  ON
    t1.id = t2.orderId
  GROUP BY
    t1.id
  ORDER BY t1.userId`;
  const [result] = await connection.execute(query);

  return result as IOrder[];
}