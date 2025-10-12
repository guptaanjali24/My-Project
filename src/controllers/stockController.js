
import { stockService } from '../services/stockService.js';
import { genericController } from './genericController.js';

export const stockController = genericController(stockService, 'Stock', 'stock_id');

