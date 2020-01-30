const { Router } = require('express');
const ProductController = require('./controllers/ProductController');

const routes = Router();

routes.get('/products', ProductController.index);
routes.get('/products/:slug', ProductController.show);
routes.post('/products', ProductController.store);

module.exports = routes;
