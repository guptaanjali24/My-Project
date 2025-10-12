import express from 'express';
import { billController } from '../controllers/billController.js';
const router = express.Router();

router.get('/', billController.getAll);
router.get('/:id', billController.getById);
router.post('/', billController.create);
router.put('/:id', billController.update);
router.delete('/:id', billController.remove);

export default router;
