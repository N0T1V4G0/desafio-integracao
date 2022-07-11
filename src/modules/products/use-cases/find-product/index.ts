import { ProductsRepository } from '../../repositories/implementations/ProductsRepository';
import { FindProductController } from './FindProductController';
import { FindProductService } from './FindProductService';

const productsRepository = new ProductsRepository();
const findProductService = new FindProductService(productsRepository);
const findProductController = new FindProductController(findProductService);

export { findProductController };
