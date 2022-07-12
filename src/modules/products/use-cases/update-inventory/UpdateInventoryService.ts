import { AppError } from '../../../../errors/AppError';
import { UpdateInventoryDTO } from '../../dtos/inventory/UpdateInventoryDTO';
import { IInventoryRepository } from '../../repositories/IInventoryRepository';
import { IProductsRepository } from '../../repositories/IProductsRepository';

class UpdateInventoryService {
  constructor(
    private inventoryRepo: IInventoryRepository,
    private productsRepo: IProductsRepository,
  ) {}

  async execute(productID: number, inventory: UpdateInventoryDTO) {
    const productExists = await this.productsRepo.find(productID);
    if (!productExists) throw new AppError('Product not found', 404);
    await this.inventoryRepo.update(productID, inventory);
    return this.inventoryRepo.find(productID);
  }
}

export { UpdateInventoryService };
