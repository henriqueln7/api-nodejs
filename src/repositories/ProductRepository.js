const Product = require('../models/Product');

exports.get = () => Product.find({ active: true }, 'title price slug tags');

exports.getBySlug = (slug) => Product.findOne({
  slug,
  active: true,
}, 'title price slug tags');

exports.getByTag = (tag) => Product.find({
  tags: tag,
  active: true,
}, 'title price slug tags');

exports.create = (title, description, slug, price, tags) => Product.create({
  title, description, slug, price, tags,
});

exports.update = (id, data) => Product.findByIdAndUpdate(id, {
  $set: {
    title: data.title,
    description: data.title,
    price: data.price,
    slug: data.slug,
  },
});

exports.delete = (id) => Product.findByIdAndDelete(id);
