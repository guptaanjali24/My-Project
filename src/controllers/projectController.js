const { createController } = require('./genericController');
const service = require('../services/projectService');
module.exports = createController(service);

