import { Router } from 'express';
import { createCategoryController } from '../modules/products/use-cases/create-category';

const categoryRouter = Router();

categoryRouter.post('/', (req, res, next) => {
  createCategoryController.handle(req, res, next);
});

export { categoryRouter };
