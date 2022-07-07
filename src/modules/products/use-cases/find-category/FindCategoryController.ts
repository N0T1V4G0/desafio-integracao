import { NextFunction, Request, Response } from 'express';
import { FindCategoryService } from './FindCategoryService';

class FindCategoryController {
  constructor(private findCategoryService: FindCategoryService) {
    this.findCategoryService = findCategoryService;
  }

  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id);
      const category = await this.findCategoryService.execute(id);
      return res.status(200).json(category);
    } catch (e) {
      next(e);
    }
  }
}

export { FindCategoryController };
