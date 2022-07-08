import { NextFunction, Request, Response } from 'express';
import { CreateCategoryService } from './CreateCategoryService';

class CreateCategoryController {
  constructor(private createCategoryService: CreateCategoryService) {
    this.createCategoryService = createCategoryService;
  }

  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const category = await this.createCategoryService.execute(req.body);
      return res.status(201).json(category);
    } catch (e) {
      next(e);
    }
  }
}

export { CreateCategoryController };
