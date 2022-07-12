import { Inventory } from '../../../../database/models/inventory';
import { Product } from '../../../../database/models/product';
import { UpdateInventoryDTO } from '../../dtos/inventory/UpdateInventoryDTO';
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

  async update(
    productID: number,
    inventory: UpdateInventoryDTO,
  ): Promise<void> {
    const { quantidade, reserva, status } = inventory;
    await Inventory.update(
      { quantidade, reserva, status },
      { where: { idProduto: productID } },
    );
  }
}

export { InventoryRepository };
