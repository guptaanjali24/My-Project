import { associationService } from '../services/associationService.js';

export const associationController = {
  async getBillsWithProjects(req, res) {
    try {
      const data = await associationService.getBillsWithProjects();
      res.status(200).json({
        success: true,
        message: 'Bills with Project association fetched successfully',
        data,
      });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  },
};