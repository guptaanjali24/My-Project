import express from 'express';
import { associationController } from '../controllers/associationController.js';

const router = express.Router();

router.get('/bills-projects', associationController.getBillsWithProjects);

export default router;