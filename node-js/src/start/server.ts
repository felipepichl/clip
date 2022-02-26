import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';

import '../database';
import '../shared/container';

import { router } from '../routes';
import { AppError } from '../shared/errors/AppError';

const app = express();

app.use(express.json());
app.use(router);

app.use(
  (err: Error, resquest: Request, response: Response, _: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: 'error',
        message: err.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: `Internal server error = ${err}`,
    });
  }
);

app.listen(3333, () => {
  console.log('Server running in port 3333');
});
