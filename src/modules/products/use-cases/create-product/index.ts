import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { ProductsRepository } from '../../repositories/implementations/ProductsRepository';
import { CreateProductController } from './CreateProductController';
import { CreateProductService } from './CreateProductService';

const productsRepository = new ProductsRepository();
const categoriesRepository = new CategoriesRepository();
const createProductService = new CreateProductService(
  productsRepository,
  categoriesRepository,
);
const createProductController = new CreateProductController(
  createProductService,
);

export { createProductController };
