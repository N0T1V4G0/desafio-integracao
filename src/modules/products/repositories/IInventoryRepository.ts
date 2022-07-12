import { IInventory } from '../entities/IInventory';

interface IInventoryRepository {
  create(productID: number): Promise<void>;
  find(productID: number): Promise<IInventory>;
}

export { IInventoryRepository };
