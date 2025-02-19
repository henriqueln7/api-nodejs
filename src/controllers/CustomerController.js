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
