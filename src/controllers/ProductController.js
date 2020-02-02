const ProductRepository = require('../repositories/ProductRepository');

module.exports = {
  async index(req, res) {
    try {
      const products = await ProductRepository.getAll();
      return res.status(200).send(products);
    } catch (e) {
      return res.status(400);
    }
  },
  async show(req, res) {
    const { slug } = req.params;
    try {
      const product = await ProductRepository.getBySlug(slug);
      return res.status(200).send(product);
    } catch (e) {
      return res.status(400);
    }
  },
  async showByTag(req, res) {
    const { tag } = req.params;
    try {
      const product = await ProductRepository.getByTag(tag);
      return res.status(200).send(product);
    } catch (e) {
      return res.status(400);
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
      const product = await ProductRepository.save(title, description, slug, price, tags);
      return res.status(201).send(product);
    } catch (err) {
      return res.status(400).send({ message: err });
    }
  },
  async update(req, res) {
    const { id } = req.params;
    const {
      title,
      description,
      slug,
      price,
    } = req.body;
    try {
      const product = await ProductRepository.update(id, {
        title,
        description,
        slug,
        price,
      });
      return res.status(200).send(product);
    } catch (e) {
      return res.status(400);
    }
  },
  async delete(req, res) {
    const { id } = req.params;
    try {
      await ProductRepository.delete(id);
      return res.status(200).send({ message: 'Produto deletado :)' });
    } catch (e) {
      return res.status(400);
    }
  },
};
