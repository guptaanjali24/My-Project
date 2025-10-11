const { createController } = require('./genericController');
const service = require('../services/billService');
module.exports = createController(service);
