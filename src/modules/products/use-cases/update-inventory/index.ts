import { InventoryRepository } from '../../repositories/implementations/InventoryRepository';
import { ProductsRepository } from '../../repositories/implementations/ProductsRepository';
import { UpdateInventoryController } from './UpdateInventoryController';
import { UpdateInventoryService } from './UpdateInventoryService';

const inventoryRepository = new InventoryRepository();
const productsRepository = new ProductsRepository();
const updateInventoryService = new UpdateInventoryService(
  inventoryRepository,
  productsRepository,
);
const updateInventoryController = new UpdateInventoryController(
  updateInventoryService,
);

export { updateInventoryController };
