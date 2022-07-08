import { AppError } from '../../../../errors/AppError';
import { CreateProductDTO } from '../../dtos/product/CreateProductDTO';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';
import { IProductsRepository } from '../../repositories/IProductsRepository';

class CreateProductService {
  // private productsRepo: IProductsRepository;
  // private categoriesRepo: ICategoriesRepository;
  constructor(
    private productsRepo: IProductsRepository,
    private categoriesRepo: ICategoriesRepository,
  ) {}

  async execute(product: CreateProductDTO) {
    const { idCategoria } = product;
    const categoryExists = await this.categoriesRepo.find(idCategoria);
    if (!categoryExists) throw new AppError('Category not found', 404);
    return this.productsRepo.create(product);
  }
}

export { CreateProductService };
