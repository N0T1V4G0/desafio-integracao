import { IProductsRepository } from '../../repositories/IProductsRepository';

class ListProductsService {
  constructor(private productsRepo: IProductsRepository) {
    this.productsRepo = productsRepo;
  }

  async execute() {
    return this.productsRepo.list();
  }
}

export { ListProductsService };
