
import { projectService } from '../services/projectService.js';
import { genericController } from './genericController.js';

export const projectController = genericController(projectService, 'Project', 'project_id');
