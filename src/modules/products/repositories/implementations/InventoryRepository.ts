import { Inventory } from '../../../../database/models/inventory';
import { Product } from '../../../../database/models/product';
import { IInventory } from '../../entities/IInventory';
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

  async find(productID: number): Promise<IInventory> {
    return Inventory.findOne({
      where: { idProduto: productID },
      include: { model: Product, as: 'produto' },
    }) as unknown as IInventory;
  }
}

export { InventoryRepository };
