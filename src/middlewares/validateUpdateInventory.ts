import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import { AppError } from '../errors/AppError';

const inventorySchema = Joi.object({
  quantidade: Joi.number(),
  reserva: Joi.number(),
  status: Joi.number().min(0).max(1),
});

const validateUpdateInventory = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { error } = inventorySchema.validate(req.body);
  if (error) throw new AppError(error.message);
  next();
};

export { validateUpdateInventory };
