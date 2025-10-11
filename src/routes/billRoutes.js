const express = require('express');
const router = express.Router();
const billController = require('../controllers/billController');

router.get('/', billController.getAll);
router.get('/:id', billController.getById);
router.post('/', billController.create);
router.put('/:id', billController.update);
router.delete('/:id', billController.remove);

module.exports = router;
