const { createController } = require('./genericController');
const service = require('../services/stockService');
module.exports = createController(service);
