import * as userModel from '../models/userModel';
import tokenGeneration from '../helpers/token';
import IUser from '../interfaces/IUser';

export default async function addUser(user: IUser) {
  await userModel.default(user);

  const token = tokenGeneration(user);
  console.log(token);
  
  return token;
}