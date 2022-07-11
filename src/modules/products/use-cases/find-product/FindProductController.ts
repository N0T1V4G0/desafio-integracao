import { NextFunction, Request, Response } from 'express';
import { FindProductService } from './FindProductService';

class FindProductController {
  constructor(private findProductService: FindProductService) {
    this.findProductService = findProductService;
  }

  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id);
      const product = await this.findProductService.execute(id);
      return res.status(200).json(product);
    } catch (e) {
      next(e);
    }
  }
}

export { FindProductController };
