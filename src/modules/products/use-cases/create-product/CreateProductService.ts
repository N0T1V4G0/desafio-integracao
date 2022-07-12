import { AppError } from '../../../../errors/AppError';
import { CreateProductDTO } from '../../dtos/product/CreateProductDTO';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';
import { IInventoryRepository } from '../../repositories/IInventoryRepository';
import { IProductsRepository } from '../../repositories/IProductsRepository';

class CreateProductService {
  constructor(
    private productsRepo: IProductsRepository,
    private categoriesRepo: ICategoriesRepository,
    private inventoryRepo: IInventoryRepository,
  ) {}

  async execute(product: CreateProductDTO) {
    const { idCategoria } = product;
    const categoryExists = await this.categoriesRepo.find(idCategoria);
    if (!categoryExists) throw new AppError('Category not found', 404);
    const newProduct = await this.productsRepo.create(product);
    if (newProduct.id) {
      await this.inventoryRepo.create(newProduct.id);
    }
    return newProduct;
  }
}

export { CreateProductService };
