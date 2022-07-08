import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { DeleteCategoryController } from './DeleteCategoryController';
import { DeleteCategoryService } from './DeleteCategoryService';

const categoriesRepository = new CategoriesRepository();
const deleteCategoryService = new DeleteCategoryService(categoriesRepository);
const deleteCategoryController = new DeleteCategoryController(
  deleteCategoryService,
);

export { deleteCategoryController };
