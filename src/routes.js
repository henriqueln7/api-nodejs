const { Router } = require('express');

const routers = Router();

routers.get('/', (req, res) => {
  res.status(200).send(req.params);
});

module.exports = routers;
