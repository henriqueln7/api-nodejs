const { Router } = require('express');
const ProductController = require('./controllers/ProductController');
const CustomerController = require('./controllers/CustomerController');
const OrderController = require('./controllers/OrderController');

const routes = Router();

routes.get('/products', ProductController.index);
routes.get('/products/:slug', ProductController.show);
routes.get('/products/tag/:tag', ProductController.showByTag);
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.delete);

routes.get('/customers', CustomerController.index);
routes.get('/customers/:id', CustomerController.show);
routes.post('/customers/', CustomerController.store);
routes.put('/customers/:id', CustomerController.update);
routes.delete('/customers/:id', CustomerController.delete);

routes.get('/orders', OrderController.index);
routes.get('/orders/:id', OrderController.show);
routes.post('/orders/', OrderController.store);
routes.delete('/orders/:id', OrderController.delete);

module.exports = routes;
