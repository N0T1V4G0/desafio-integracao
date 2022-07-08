import { IProductsRepository } from '../../repositories/IProductsRepository';

class FindProductService {
  constructor(private productsRepo: IProductsRepository) {
    this.productsRepo = productsRepo;
  }

  async execute(id: number) {
    return this.productsRepo.find(id);
  }
}

export { FindProductService };
