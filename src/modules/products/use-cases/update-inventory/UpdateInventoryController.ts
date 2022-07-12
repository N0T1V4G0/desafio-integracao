import { NextFunction, Request, Response } from 'express';
import { UpdateInventoryService } from './UpdateInventoryService';

class UpdateInventoryController {
  constructor(private updateInventoryService: UpdateInventoryService) {
    this.updateInventoryService = updateInventoryService;
  }

  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const productID = parseInt(req.params.id);
      const inventory = await this.updateInventoryService.execute(
        productID,
        req.body,
      );

      return res.status(200).json(inventory);
    } catch (e) {
      next(e);
    }
  }
}

export { UpdateInventoryController };
