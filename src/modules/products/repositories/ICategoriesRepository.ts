import { CreateCategoryDTO } from '../dtos/category/CreateCategoryDTO';
import { ICategory } from '../entities/ICategory';

interface ICategoriesRepository {
  create(category: CreateCategoryDTO): Promise<ICategory>;
}

export { ICategoriesRepository };
