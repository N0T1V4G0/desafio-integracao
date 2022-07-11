import { NextFunction, Request, Response } from 'express';
import { UpdateProductService } from './UpdateProductService';

class UpdateProductController {
  constructor(private updateProductService: UpdateProductService) {
    this.updateProductService = updateProductService;
  }

  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      req.body.id = parseInt(req.params.id);
      const updatedProduct = await this.updateProductService.execute(req.body);
      return res.status(200).json(updatedProduct);
    } catch (e) {
      next(e);
    }
  }
}

export { UpdateProductController };
