import { expenseService } from '../services/expenseService.js';
import { genericController } from './genericController.js';

export const expenseController = genericController(expenseService, 'Expenses', 'expense_id');

