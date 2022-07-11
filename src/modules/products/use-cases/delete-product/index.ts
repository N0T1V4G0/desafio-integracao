import { ProductsRepository } from '../../repositories/implementations/ProductsRepository';
import { DeleteProductController } from './DeleteProductController';
import { DeleteProductService } from './DeleteProductService';

const productsRepository = new ProductsRepository();
const deleteProductService = new DeleteProductService(productsRepository);
const deleteProductController = new DeleteProductController(
  deleteProductService,
);

export { deleteProductController };
