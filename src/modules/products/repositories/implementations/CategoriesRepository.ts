import { Category } from '../../../../database/models/category';
import { CreateCategoryDTO } from '../../dtos/category/CreateCategoryDTO';
import { UpdateCategoryDTO } from '../../dtos/category/UpdateCategoryDTO';
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

  async find(id: number): Promise<ICategory> {
    return Category.findByPk(id) as unknown as ICategory;
  }

  async update(category: UpdateCategoryDTO): Promise<number> {
    const { id, codigo, titulo, status } = category;
    const affectedCount = await Category.update(
      { codigo, titulo, status },
      { where: { id } },
    );
    return affectedCount as unknown as number;
  }

  async delete(id: number): Promise<void> {
    await Category.destroy({ where: { id } });
  }
}

export { CategoriesRepository };
