import { CreateProductDTO } from '../dtos/product/CreateProductDTO';
import { IProduct } from '../entities/IProduct';

interface IProductsRepository {
  create(product: CreateProductDTO): Promise<IProduct>;
}

export { IProductsRepository };
