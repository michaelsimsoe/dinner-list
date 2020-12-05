import { Router } from 'express';
import controllers from './dish.controllers';

const router = Router();

// /api/dish
router
  .route('/')
  .get(controllers.getOne)
  .post(controllers.createOne);

// /api/dish/:id
router
  .route('/:id')
  .get(controllers.getOne)
  .put(controllers.updateOne)
  .delete(controllers.removeOne);

export default router;
