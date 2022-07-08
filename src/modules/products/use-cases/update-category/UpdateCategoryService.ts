import { AppError } from '../../../../errors/AppError';
import { UpdateCategoryDTO } from '../../dtos/category/UpdateCategoryDTO';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

class UpdateCategoryService {
  constructor(private categoriesRepo: ICategoriesRepository) {
    this.categoriesRepo = categoriesRepo;
  }

  async execute(category: UpdateCategoryDTO) {
    const { id } = category;
    const categoryExists = await this.categoriesRepo.find(id);
    if (!categoryExists) throw new AppError('Category not found', 404);
    await this.categoriesRepo.update(category);
    const updatedCategory = await this.categoriesRepo.find(id);
    return updatedCategory;
  }
}

export { UpdateCategoryService };
