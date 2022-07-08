import { Router } from 'express';
import { createProductController } from '../modules/products/use-cases/create-product';

const productRouter = Router();

productRouter.post('/', (req, res, next) => {
  createProductController.handle(req, res, next);
});

export { productRouter };
