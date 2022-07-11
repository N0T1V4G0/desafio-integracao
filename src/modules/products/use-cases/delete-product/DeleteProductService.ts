import { IProductsRepository } from '../../repositories/IProductsRepository';

class DeleteProductService {
  constructor(private productRepo: IProductsRepository) {
    this.productRepo = productRepo;
  }

  async execute(id: number) {
    await this.productRepo.delete(id);
  }
}

export { DeleteProductService };
