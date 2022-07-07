import { AppError } from '../../../../errors/AppError';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

class FindCategoryService {
  constructor(private categoriesRepo: ICategoriesRepository) {
    this.categoriesRepo = categoriesRepo;
  }

  async execute(id: number) {
    const category = await this.categoriesRepo.find(id);
    if (!category) throw new AppError('Category not found', 404);
    return category;
  }
}

export { FindCategoryService };
