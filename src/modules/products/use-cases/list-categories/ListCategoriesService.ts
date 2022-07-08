import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

class ListCategoriesService {
  constructor(private categoriesRepo: ICategoriesRepository) {
    this.categoriesRepo = categoriesRepo;
  }

  async execute() {
    return this.categoriesRepo.list();
  }
}

export { ListCategoriesService };
