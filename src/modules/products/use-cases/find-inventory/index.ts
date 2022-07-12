import { InventoryRepository } from '../../repositories/implementations/InventoryRepository';
import { ProductsRepository } from '../../repositories/implementations/ProductsRepository';
import { FindInventoryController } from './FindInventoryController';
import { FindInventoryService } from './FindInventoryService';

const inventoryRepository = new InventoryRepository();
const productsRepository = new ProductsRepository();
const findInventoryService = new FindInventoryService(
  inventoryRepository,
  productsRepository,
);
const findInventoryController = new FindInventoryController(
  findInventoryService,
);

export { findInventoryController };
