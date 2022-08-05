import jwt, { SignOptions, Secret } from 'jsonwebtoken';
import 'dotenv/config';

const jwtDuration: SignOptions = { expiresIn: '7d' };

// https://stackoverflow.com/questions/54496398/typescript-type-string-undefined-is-not-assignable-to-type-string
// const secretPassword: Secret = process.env.SECRET!;

const secretPassword: Secret = process.env.SECRET || 'testCheck';

export default function tokenGeneration(username: string): string {
  const token = jwt.sign({ username }, secretPassword, jwtDuration);

  return token;
}