import { NextFunction, Request, Response } from 'express';
import { CreateProductService } from './CreateProductService';

class CreateProductController {
  constructor(private createProductService: CreateProductService) {
    this.createProductService = createProductService;
  }

  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const product = await this.createProductService.execute(req.body);
      return res.status(201).json(product);
    } catch (e) {
      next(e);
    }
  }
}

export { CreateProductController };
