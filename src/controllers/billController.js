import { billService } from '../services/billService.js';
import { genericController } from './genericController.js';

export const billController = genericController(billService, 'Bills', 'bill_id');