import { NextFunction, Request, Response } from 'express';
import { DeleteCategoryService } from './DeleteCategoryService';

class DeleteCategoryController {
  constructor(private deleteCategoryService: DeleteCategoryService) {
    this.deleteCategoryService = deleteCategoryService;
  }

  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id);
      await this.deleteCategoryService.execute(id);
      return res.status(204).send();
    } catch (e) {
      next(e);
    }
  }
}

export { DeleteCategoryController };
