import { Inventory } from '../../../../database/models/inventory';
import { IInventoryRepository } from '../IInventoryRepository';

class InventoryRepository implements IInventoryRepository {
  async create(productID: number): Promise<void> {
    await Inventory.create({
      idProduto: productID,
      quantidade: 0,
      reserva: 0,
      status: 1,
    });
  }
}

export { InventoryRepository };
