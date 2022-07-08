import { CreateCategoryDTO } from '../dtos/category/CreateCategoryDTO';
import { UpdateCategoryDTO } from '../dtos/category/UpdateCategoryDTO';
import { ICategory } from '../entities/ICategory';

interface ICategoriesRepository {
  create(category: CreateCategoryDTO): Promise<ICategory>;
  list(): Promise<ICategory[]>;
  find(id: number): Promise<ICategory>;
  update(category: UpdateCategoryDTO): Promise<number>;
  delete(id: number): Promise<void>;
}

export { ICategoriesRepository };
