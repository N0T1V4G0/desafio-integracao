import { Router } from 'express';
import { validateCategoryBody } from '../middlewares/validateCategoryBody';
import { validateUpdateCategory } from '../middlewares/validateUpdateCategory';
import { createCategoryController } from '../modules/products/use-cases/create-category';
import { deleteCategoryController } from '../modules/products/use-cases/delete-category';
import { findCategoryController } from '../modules/products/use-cases/find-category';
import { listCategoriesController } from '../modules/products/use-cases/list-categories';
import { updateCategoryController } from '../modules/products/use-cases/update-category';

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

categoryRouter.patch('/:id', validateUpdateCategory, (req, res, next) => {
  updateCategoryController.handle(req, res, next);
});

categoryRouter.delete('/:id', (req, res, next) => {
  deleteCategoryController.handle(req, res, next);
});

export { categoryRouter };
