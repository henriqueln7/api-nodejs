const guid = require("guid");
const OrderRepository = require("../repositories/OrderRepository");
const AuthService = require("../services/AuthService");

module.exports = {
  async index(req, res) {
    const orders = await OrderRepository.getAll();
    return res.status(200).send(orders);
  },

  async show(req, res) {
    const { id } = req.params;
    try {
      const order = await OrderRepository.get(id);
      res.status(200).send(order);
    } catch (err) {
      res.status(400).json(err);
    }
  },

  async store(req, res) {
    const { items } = req.body;
    const token =
      req.body.token || req.query.token || req.headers["x-acess-token"];

    const data = AuthService.decodeToken(token);
    const number = guid.raw().substring(0, 5);
    try {
      const order = await OrderRepository.save({
        customer: data._id,
        number,
        items
      });
      return res.status(201).send(order);
    } catch (err) {
      return res.status(400).send(err);
    }
  },

  async delete(req, res) {
    const { id } = req.params;
    try {
      await OrderRepository.delete(id);
      return res.status(201).send({ message: "Deleted" });
    } catch (err) {
      return res.status(400).send(err);
    }
  }
};
