import { Router } from 'express';
import { validateCreateProduct } from '../middlewares/validateCreateProduct';
import { validateUpdateProduct } from '../middlewares/validateUpdateProduct';
import { createProductController } from '../modules/products/use-cases/create-product';
import { deleteProductController } from '../modules/products/use-cases/delete-product';
import { findInventoryController } from '../modules/products/use-cases/find-inventory';
import { findProductController } from '../modules/products/use-cases/find-product';
import { listProductsController } from '../modules/products/use-cases/list-products';
import { updateProductController } from '../modules/products/use-cases/update-products';

const productRouter = Router();

productRouter.post('/', validateCreateProduct, (req, res, next) => {
  createProductController.handle(req, res, next);
});

productRouter.get('/', (req, res, next) => {
  listProductsController.handle(req, res, next);
});

productRouter.get('/:id', (req, res, next) => {
  findProductController.handle(req, res, next);
});

productRouter.patch('/:id', validateUpdateProduct, (req, res, next) => {
  updateProductController.handle(req, res, next);
});

productRouter.delete('/:id', (req, res, next) => {
  deleteProductController.handle(req, res, next);
});

productRouter.get('/:id/estoque', (req, res, next) => {
  findInventoryController.handle(req, res, next);
});

export { productRouter };
