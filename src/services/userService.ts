import joi from 'joi';
import * as userModel from '../models/userModel';
import tokenGeneration from '../helpers/token';
import IUser from '../interfaces/IUser';

const userSchema = joi.object({
  username: joi.string().required(),
  password: joi.string().required(),
});

const loginError = (name: string, message: string): void => {
  const e = new Error('Username or password invalid');
  e.name = name;
  e.message = message;
  throw e;
};

export async function addUser(user: IUser) {
  await userModel.addUser(user);

  const token = tokenGeneration(user.username);
  console.log(token);
  
  return token;
}

export async function login(user: IUser): Promise<string> {
  const { error } = userSchema.validate(user);

  if (error) {
    loginError('BAD_REQUEST', error.message);
  }

  const userExist = await userModel.login(user);
  if (!userExist) {
    loginError('UNAUTHORIZED', 'Username or password invalid');
  }

  const token = tokenGeneration(userExist.username);
  
  return token;
}