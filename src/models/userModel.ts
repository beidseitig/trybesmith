import { ResultSetHeader } from 'mysql2/promise';
import IUser from '../interfaces/IUser';
import connection from './connection';

export async function addUser(user: IUser): Promise<IUser> {
  const { username, classe, level, password } = user;

  await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
    [username, classe, level, password],
  );

  const newUser: IUser = { username, classe, level, password };
  return newUser;
}

export async function login(user: IUser): Promise<IUser> {
  const { username, password } = user;

  const [result] = await connection.execute(
    'SELECT id, username FROM Trybesmith.Users WHERE username=? AND password=?',
    [username, password],
  );
  const [userLogin] = result as IUser[];
  return userLogin;
}