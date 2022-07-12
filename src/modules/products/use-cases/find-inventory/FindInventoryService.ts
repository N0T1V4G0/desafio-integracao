import { AppError } from '../../../../errors/AppError';
import { IInventoryRepository } from '../../repositories/IInventoryRepository';
import { IProductsRepository } from '../../repositories/IProductsRepository';

class FindInventoryService {
  constructor(
    private inventoryRepo: IInventoryRepository,
    private productsRepo: IProductsRepository,
  ) {}

  async execute(productID: number) {
    const productExists = await this.productsRepo.find(productID);
    if (!productExists) throw new AppError('Product not found', 404);
    return this.inventoryRepo.find(productID);
  }
}

export { FindInventoryService };
