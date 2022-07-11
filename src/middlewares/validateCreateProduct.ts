import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import { AppError } from '../errors/AppError';

const productSchema = Joi.object({
  codigo: Joi.string().required(),
  nome: Joi.string().required(),
  status: Joi.number().min(0).max(1),
  valor: Joi.number().min(0).required(),
  descricao: Joi.string(),
  idCategoria: Joi.number().min(1).required(),
});

const validateCreateProduct = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { error } = productSchema.validate(req.body);
  if (error) throw new AppError(error.message);
  next();
};

export { validateCreateProduct };
