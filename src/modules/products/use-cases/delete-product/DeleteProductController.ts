import { NextFunction, Request, Response } from 'express';
import { DeleteProductService } from './DeleteProductService';

class DeleteProductController {
  constructor(private deleteProductService: DeleteProductService) {
    this.deleteProductService = deleteProductService;
  }

  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id);
      await this.deleteProductService.execute(id);
      return res.status(204).send();
    } catch (e) {
      next(e);
    }
  }
}

export { DeleteProductController };
