const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const CustomerRepository = require('../repositories/CustomerRepository');
const EmailService = require('../services/EmailService');
const authConfig = require('../config/auth');

module.exports = {
  async register(req, res) {
    const { name, email, password } = req.body;
    try {
      const customer = await CustomerRepository.save({
        name,
        email,
        password: await bcrypt.hash(password, 10),
      });

      EmailService.send(customer.email, 'Bem vindo :)', `<strong> Seja bem vindo à minha API, ${customer.name} :D`);

      return res.status(201).json(customer);
    } catch (err) {
      return res.status(400).json({ error: 'Something went wrong' });
    }
  },

  async authenticate(req, res) {
    const { email, password } = req.body;

    const costumer = await CustomerRepository.authenticate(email);

    if (!costumer) {
      return res.status(401).json({ error: 'Costumer not found' });
    }

    if (!await bcrypt.compare(password, costumer.password)) {
      return res.status(400).json({ error: 'Invalid password' });
    }

    costumer.password = undefined;

    const token = jwt.sign({ id: costumer.id }, authConfig.secret, {
      expiresIn: '1d',
    });

    return res.status(200).json({ costumer, token });
  },
};
