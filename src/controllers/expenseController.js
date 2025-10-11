const { createController } = require('./genericController');
const service = require('../services/expenseService');
module.exports = createController(service);
