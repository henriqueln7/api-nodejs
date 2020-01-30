const Product = require('../models/Product');

module.exports = {
  async index(req, res) {
    try {
      const products = await Product.find({
        active: true,
      }, 'title price slug tags');
      res.status(200).send(products);
    } catch (e) {
      res.status(400);
    }
  },
  async show(req, res) {
    const { slug } = req.params;
    try {
      const product = await Product.findOne({
        slug,
        active: true,
      }, 'title price slug tags');
      res.status(200).send(product);
    } catch (e) {
      res.status(400);
    }
  },
  async store(req, res) {
    const {
      title,
      slug,
      description,
      price,
      tags,
    } = req.body;

    try {
      const product = await Product.create({
        title,
        slug,
        description,
        price,
        tags,
      });
      res.status(201).json(product);
    } catch (err) {
      res.status(400).send({ message: err });
    }
  },
};
