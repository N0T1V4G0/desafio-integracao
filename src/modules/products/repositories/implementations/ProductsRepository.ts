import { Product } from '../../../../database/models/product';
import { CreateProductDTO } from '../../dtos/product/CreateProductDTO';
import { IProduct } from '../../entities/IProduct';
import { IProductsRepository } from '../IProductsRepository';

class ProductsRepository implements IProductsRepository {
  async create(product: CreateProductDTO): Promise<IProduct> {
    const { nome, descricao, codigo, status, valor, idCategoria } = product;
    const newProduct = Product.create({
      nome,
      descricao,
      codigo,
      status,
      valor,
      idCategoria,
    });
    return newProduct;
  }
}

export { ProductsRepository };
