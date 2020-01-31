const { Router } = require('express');
const ProductController = require('./controllers/ProductController');

const routes = Router();

routes.get('/products', ProductController.index);
routes.get('/products/:slug', ProductController.show);
routes.get('/products/tag/:tag', ProductController.showByTag);
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.delete);

module.exports = routes;
