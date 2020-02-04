const { Router } = require('express');
const OrderController = require('../controllers/OrderController');
const AuthMiddleware = require('../middlewares/AuthMiddleware');

const routes = Router();

routes.use(AuthMiddleware);

routes.get('/', OrderController.index);
routes.get('/:id', OrderController.show);
routes.post('/', OrderController.store);
routes.delete('/:id', OrderController.delete);

module.exports = routes;
