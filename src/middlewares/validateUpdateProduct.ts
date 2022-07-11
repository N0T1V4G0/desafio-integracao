import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import { AppError } from '../errors/AppError';

const productSchema = Joi.object({
  codigo: Joi.string(),
  nome: Joi.string(),
  status: Joi.number().min(0).max(1),
  valor: Joi.number().min(0),
  descricao: Joi.string(),
  idCategoria: Joi.number().min(1),
});

const validateUpdateProduct = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { error } = productSchema.validate(req.body);
  if (error) throw new AppError(error.message);
  next();
};

export { validateUpdateProduct };
