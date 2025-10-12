import { clientPaymentService } from '../services/clientPaymentService.js';
import { genericController } from './genericController.js';
export const clientPaymentController = genericController(clientPaymentService, 'Client_payments', 'client_payment_id');

