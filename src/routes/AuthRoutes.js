const { Router } = require('express');

const routes = Router();

const AuthController = require('../controllers/AuthController');

routes.post('/authenticate', AuthController.authenticate);
routes.post('/register', AuthController.register);

module.exports = routes;
