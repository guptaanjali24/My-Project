const { createController } = require('./genericController');
const service = require('../services/clientPaymentService');
module.exports = createController(service);
