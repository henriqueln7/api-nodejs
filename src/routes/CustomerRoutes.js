const { Router } = require('express');
const CustomerController = require('../controllers/CustomerController');

const routes = Router();

routes.get('/', CustomerController.index);
routes.get('/:id', CustomerController.show);
routes.post('/', CustomerController.store);
routes.put('/:id', CustomerController.update);
routes.delete('/:id', CustomerController.delete);
routes.post('/authenticate', CustomerController.authenticate);


module.exports = routes;
