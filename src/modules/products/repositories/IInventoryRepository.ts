interface IInventoryRepository {
  create(productID: number): Promise<void>;
}

export { IInventoryRepository };
