import { Router } from 'express';
import { createCategoryController } from '../modules/products/use-cases/create-category';
import { listCategoriesController } from '../modules/products/use-cases/list-categories';

const categoryRouter = Router();

categoryRouter.post('/', (req, res, next) => {
  createCategoryController.handle(req, res, next);
});

categoryRouter.get('/', (req, res, next) => {
  listCategoriesController.handle(req, res, next);
});

export { categoryRouter };
