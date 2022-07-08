import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import { AppError } from '../errors/AppError';

const categorySchema = Joi.object({
  codigo: Joi.string(),
  titulo: Joi.string(),
  status: Joi.number().min(0).max(1),
});

const validateUpdateCategory = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { error } = categorySchema.validate(req.body);
  if (error) throw new AppError(error.message);
  next();
};

export { validateUpdateCategory };
