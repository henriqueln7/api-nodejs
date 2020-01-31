const Product = require('../models/Product');

class ProductRepository {
  static getAll() {
    return Product.find({ active: true }, 'title price slug tags');
  }

  static getBySlug(slug) {
    return Product.findOne({
      slug,
      active: true,
    }, 'title price slug tags');
  }

  static getByTag(tag) {
    return Product.find({
      tags: tag,
      active: true,
    }, 'title price slug tags');
  }

  static save(title, description, slug, price, tags) {
    return Product.create({title, description, slug, price, tags});
  }

  static update(id, data) {
    return Product.findByIdAndUpdate(id, {
      $set: {
        title: data.title,
        description: data.description,
        price: data.price,
        slug: data.slug,
      },
    });
  }

  static delete(id) {
    return Product.findByIdAndDelete(id);
  }
}

module.exports = ProductRepository;
