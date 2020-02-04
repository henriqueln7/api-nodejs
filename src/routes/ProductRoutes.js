const { Router } = require('express');
const ProductController = require('../controllers/ProductController');
const AuthMiddleware = require('../middlewares/AuthMiddleware');

const routes = Router();

routes.use(AuthMiddleware);

routes.get('/', ProductController.index);
routes.get('/:slug', ProductController.show);
routes.get('/tag/:tag', ProductController.showByTag);
routes.post('/', AuthMiddleware, ProductController.store);
routes.put('/:id', ProductController.update);
routes.delete('/:id', ProductController.delete);

module.exports = routes;
