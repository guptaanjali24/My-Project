import { userService } from '../services/userService.js';
import { genericController } from './genericController.js';

export const userController = genericController(userService, 'Users', 'user_id');

