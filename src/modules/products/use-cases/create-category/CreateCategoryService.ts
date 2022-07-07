import { CreateCategoryDTO } from '../../dtos/category/CreateCategoryDTO';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

class CreateCategoryService {
  constructor(private categoriesRepo: ICategoriesRepository) {
    this.categoriesRepo = categoriesRepo;
  }

  async execute(category: CreateCategoryDTO) {
    const { codigo, status, titulo } = category;
    return this.categoriesRepo.create({ codigo, status, titulo });
  }
}

export { CreateCategoryService };
