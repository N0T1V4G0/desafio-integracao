import { CreateProductDTO } from '../dtos/product/CreateProductDTO';
import { IProduct } from '../entities/IProduct';

interface IProductsRepository {
  create(product: CreateProductDTO): Promise<IProduct>;
  list(): Promise<IProduct[]>;
  find(id: number): Promise<IProduct>;
}

export { IProductsRepository };
