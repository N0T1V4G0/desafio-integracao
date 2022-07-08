import { NextFunction, Request, Response } from 'express';
import { UpdateCategoryService } from './UpdateCategoryService';

class UpdateCategoryController {
  constructor(private updateCategoryService: UpdateCategoryService) {
    this.updateCategoryService = updateCategoryService;
  }

  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      req.body.id = parseInt(req.params.id);
      const updatedCategory = await this.updateCategoryService.execute(
        req.body,
      );
      return res.status(200).json(updatedCategory);
    } catch (e) {
      next(e);
    }
  }
}

export { UpdateCategoryController };
