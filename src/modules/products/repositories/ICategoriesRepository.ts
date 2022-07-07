import { CreateCategoryDTO } from '../dtos/category/CreateCategoryDTO';
import { ICategory } from '../entities/ICategory';

interface ICategoriesRepository {
  create(category: CreateCategoryDTO): Promise<ICategory>;
  list(): Promise<ICategory[]>;
  find(id: number): Promise<ICategory>;
}

export { ICategoriesRepository };
