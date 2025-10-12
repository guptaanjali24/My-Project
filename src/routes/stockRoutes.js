import express from 'express';
import { stockController } from '../controllers/stockController.js';
const router = express.Router();

router.get('/', stockController.getAll);
router.get('/:id', stockController.getById);
router.post('/', stockController.create);
router.put('/:id', stockController.update);
router.delete('/:id', stockController.remove);

export default router;

