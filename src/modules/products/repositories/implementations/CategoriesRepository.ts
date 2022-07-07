import { Category } from '../../../../database/models/category';
import { CreateCategoryDTO } from '../../dtos/category/CreateCategoryDTO';
import { ICategory } from '../../entities/ICategory';
import { ICategoriesRepository } from '../ICategoriesRepository';

class CategoriesRepository implements ICategoriesRepository {
  async create(category: CreateCategoryDTO): Promise<ICategory> {
    const { codigo, titulo, status } = category;
    return Category.create({ codigo, titulo, status }) as unknown as ICategory;
  }

  async list(): Promise<ICategory[]> {
    return Category.findAll() as unknown as ICategory[];
  }
}

export { CategoriesRepository };
