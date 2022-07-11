import { NextFunction, Request, Response } from 'express';
import { ListProductsService } from './ListProductsService';

class ListProductsController {
  constructor(private listProductsService: ListProductsService) {
    this.listProductsService = listProductsService;
  }

  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const products = await this.listProductsService.execute();
      return res.status(200).json(products);
    } catch (e) {
      next(e);
    }
  }
}

export { ListProductsController };
