import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { FindCategoryController } from './FindCategoryController';
import { FindCategoryService } from './FindCategoryService';

const categoriesRepository = new CategoriesRepository();
const findCategoryService = new FindCategoryService(categoriesRepository);
const findCategoryController = new FindCategoryController(findCategoryService);

export { findCategoryController };
