const { Router } = require('express');
const CustomerController = require('../controllers/CustomerController');


const routes = Router();

routes.get('/', CustomerController.index);
routes.get('/:id', CustomerController.show);
routes.put('/:id', CustomerController.update);
routes.delete('/:id', CustomerController.delete);


module.exports = routes;
