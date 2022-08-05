import jwt, { SignOptions, Secret } from 'jsonwebtoken';
import IUser from '../interfaces/IUser';
import 'dotenv/config';

const jwtDuration: SignOptions = { expiresIn: '7d' };

// https://stackoverflow.com/questions/54496398/typescript-type-string-undefined-is-not-assignable-to-type-string
// const secretPassword: Secret = process.env.SECRET!;

const secretPassword: Secret = process.env.SECRET || '';

export default function tokenGeneration(data: Omit<IUser, 'password'>): string {
  const token = jwt.sign(data, secretPassword, jwtDuration);

  return token;
}