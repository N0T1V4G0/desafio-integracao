import { UpdateInventoryDTO } from '../dtos/inventory/UpdateInventoryDTO';
import { IInventory } from '../entities/IInventory';

interface IInventoryRepository {
  create(productID: number): Promise<void>;
  find(productID: number): Promise<IInventory>;
  update(productID: number, inventory: UpdateInventoryDTO): Promise<void>;
}

export { IInventoryRepository };
