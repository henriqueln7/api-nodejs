const bcrypt = require('bcrypt');
const CustomerRepository = require('../repositories/CustomerRepository');

module.exports = {
  async index(req, res) {
    try {
      const customers = await CustomerRepository.getAll();
      return res.status(200).send(customers);
    } catch (err) {
      return res.status(400);
    }
  },
  async show(req, res) {
    const { id } = req.params;
    try {
      const customer = await CustomerRepository.get(id);
      return res.status(200).send(customer);
    } catch (err) {
      return res.status(400);
    }
  },
  async store(req, res) {
    const { name, email, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    try {
      const customer = await CustomerRepository.save(name, email, hashPassword);
      return res.status(201).send(customer);
    } catch (err) {
      return res.status(401).send(err);
    }
  },
  async update(req, res) {
    const { id } = req.params;
    const { name, email, password } = req.body;
    try {
      const customer = await CustomerRepository.update(id, {
        name,
        email,
        password,
      });
      return res.status(200).send(customer);
    } catch (err) {
      return res.status(400).send(err);
    }
  },
  async delete(req, res) {
    const { id } = req.params;
    try {
      await CustomerRepository.delete(id);
      return res.status(200).send({ message: 'Cliente deletado :)' });
    } catch (e) {
      return res.status(400);
    }
  },
};
