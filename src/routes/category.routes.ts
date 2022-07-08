import { Router } from 'express';
import { validateCategoryBody } from '../middlewares/validateCategoryBody';
import { createCategoryController } from '../modules/products/use-cases/create-category';
import { findCategoryController } from '../modules/products/use-cases/find-category';
import { listCategoriesController } from '../modules/products/use-cases/list-categories';

const categoryRouter = Router();

categoryRouter.post('/', validateCategoryBody, (req, res, next) => {
  createCategoryController.handle(req, res, next);
});

categoryRouter.get('/', (req, res, next) => {
  listCategoriesController.handle(req, res, next);
});

categoryRouter.get('/:id', (req, res, next) => {
  findCategoryController.handle(req, res, next);
});

export { categoryRouter };
