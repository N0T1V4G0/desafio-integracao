import { NextFunction, Request, Response } from 'express';
import { ListCategoriesService } from './ListCategoriesService';

class ListCategoriesController {
  constructor(private listCategoriesService: ListCategoriesService) {
    this.listCategoriesService = listCategoriesService;
  }

  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const categories = await this.listCategoriesService.execute();
      return res.status(200).json(categories);
    } catch (e) {
      next(e);
    }
  }
}

export { ListCategoriesController };
