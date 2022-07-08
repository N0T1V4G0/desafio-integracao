import { Router } from 'express';
import { validateCreateProduct } from '../middlewares/validateCreateProduct';
import { createProductController } from '../modules/products/use-cases/create-product';
import { listProductsController } from '../modules/products/use-cases/list-products';

const productRouter = Router();

productRouter.post('/', validateCreateProduct, (req, res, next) => {
  createProductController.handle(req, res, next);
});

productRouter.get('/', (req, res, next) => {
  listProductsController.handle(req, res, next);
});

export { productRouter };
