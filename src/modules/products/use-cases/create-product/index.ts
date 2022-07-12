import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { InventoryRepository } from '../../repositories/implementations/InventoryRepository';
import { ProductsRepository } from '../../repositories/implementations/ProductsRepository';
import { CreateProductController } from './CreateProductController';
import { CreateProductService } from './CreateProductService';

const productsRepository = new ProductsRepository();
const categoriesRepository = new CategoriesRepository();
const inventoryRepository = new InventoryRepository();
const createProductService = new CreateProductService(
  productsRepository,
  categoriesRepository,
  inventoryRepository,
);
const createProductController = new CreateProductController(
  createProductService,
);

export { createProductController };
