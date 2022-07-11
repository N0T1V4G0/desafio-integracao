import { AppError } from '../../../../errors/AppError';
import { UpdateProductDTO } from '../../dtos/product/UpdateProductDTO';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';
import { IProductsRepository } from '../../repositories/IProductsRepository';

class UpdateProductService {
  constructor(
    private productsRepo: IProductsRepository,
    private categoriesRepo: ICategoriesRepository,
  ) {
    this.productsRepo = productsRepo;
  }

  async execute(product: UpdateProductDTO) {
    const { id, idCategoria } = product;
    const productExists = await this.productsRepo.find(id);
    if (!productExists) throw new AppError('Product not found', 404);
    if (idCategoria) {
      const categoryExists = await this.categoriesRepo.find(idCategoria);
      if (!categoryExists) throw new AppError('Category not found', 404);
    }
    await this.productsRepo.update(product);
    return this.productsRepo.find(id);
  }
}

export { UpdateProductService };
