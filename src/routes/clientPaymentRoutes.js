import express from 'express';
import { clientPaymentController } from '../controllers/clientPaymentController.js';
const router = express.Router();

router.get('/', clientPaymentController.getAll);
router.get('/:id', clientPaymentController.getById);
router.post('/', clientPaymentController.create);
router.put('/:id', clientPaymentController.update);
router.delete('/:id', clientPaymentController.remove);

export default router;
