import { ErrorRequestHandler } from 'express';

export const errorHandler: ErrorRequestHandler = async (err, _req, res, next) => {
  const { name, message } = err;

  switch (name) {
    case 'UNAUTHORIZED':
      res.status(401).json({ message });
      break;
    case 'BAD_REQUEST':
      res.status(400).json({ message });
      break;
    default:
      console.error(err);
      res.sendStatus(500);
  }
  next();
};

export default errorHandler;