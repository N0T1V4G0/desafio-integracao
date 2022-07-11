import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { ProductsRepository } from '../../repositories/implementations/ProductsRepository';
import { UpdateProductController } from './UpdateProductController';
import { UpdateProductService } from './UpdateProductService';

const categoriesRepository = new CategoriesRepository();
const productsRepository = new ProductsRepository();
const updateProductService = new UpdateProductService(
  productsRepository,
  categoriesRepository,
);
const updateProductController = new UpdateProductController(
  updateProductService,
);

export { updateProductController };
