import express from 'express';
import { projectController } from '../controllers/projectController.js';
const router = express.Router();

router.get('/', projectController.getAll);
router.get('/:id', projectController.getById);
router.post('/', projectController.create);
router.put('/:id', projectController.update);
router.delete('/:id', projectController.remove);

export default router;
