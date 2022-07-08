import { Router } from 'express';
import { validateCreateProduct } from '../middlewares/validateCreateProduct';
import { createProductController } from '../modules/products/use-cases/create-product';

const productRouter = Router();

productRouter.post('/', validateCreateProduct, (req, res, next) => {
  createProductController.handle(req, res, next);
});

export { productRouter };
