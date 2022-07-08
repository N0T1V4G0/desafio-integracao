import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

class DeleteCategoryService {
  constructor(private categoriesRepo: ICategoriesRepository) {
    this.categoriesRepo = categoriesRepo;
  }

  async execute(id: number) {
    await this.categoriesRepo.delete(id);
  }
}

export { DeleteCategoryService };
