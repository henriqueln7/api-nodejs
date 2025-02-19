const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-oxeqf.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use('/customers', routes.CustomerRoute);
app.use('/products', routes.ProductRoute);
app.use('/orders', routes.OrderRoute);
app.use(routes.AuthRoutes);

app.listen(3333);
