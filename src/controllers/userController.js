const { createController } = require('./genericController');
const service = require('../services/userService');
module.exports = createController(service);
