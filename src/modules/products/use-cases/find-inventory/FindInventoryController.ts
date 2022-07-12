import { NextFunction, Request, Response } from 'express';
import { FindInventoryService } from './FindInventoryService';

class FindInventoryController {
  constructor(private findInventoryService: FindInventoryService) {
    this.findInventoryService = findInventoryService;
  }

  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id);
      const inventory = await this.findInventoryService.execute(id);
      return res.status(200).json(inventory);
    } catch (e) {
      next(e);
    }
  }
}

export { FindInventoryController };
