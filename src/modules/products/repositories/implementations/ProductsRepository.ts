import { Product } from '../../../../database/models/product';
import { CreateProductDTO } from '../../dtos/product/CreateProductDTO';
import { UpdateProductDTO } from '../../dtos/product/UpdateProductDTO';
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

  async list(): Promise<IProduct[]> {
    return Product.findAll();
  }

  async find(id: number): Promise<IProduct> {
    return Product.findOne({ where: { id } }) as unknown as IProduct;
  }

  async update(product: UpdateProductDTO): Promise<number> {
    const { id, nome, descricao, codigo, status, valor, idCategoria } = product;
    return Product.update(
      { nome, descricao, codigo, status, valor, idCategoria },
      { where: { id } },
    ) as unknown as number;
  }
}

export { ProductsRepository };
