import { CreateProductDTO } from '../dtos/product/CreateProductDTO';
import { UpdateProductDTO } from '../dtos/product/UpdateProductDTO';
import { IProduct } from '../entities/IProduct';

interface IProductsRepository {
  create(product: CreateProductDTO): Promise<IProduct>;
  list(): Promise<IProduct[]>;
  find(id: number): Promise<IProduct>;
  update(product: UpdateProductDTO): Promise<number>;
}

export { IProductsRepository };
