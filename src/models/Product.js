const moongose = require('mongoose');

const ProductSchema = new moongose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  slug: {
    type: String,
    required: true,
    trim: true,
    index: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
  },
  active: {
    type: Boolean,
    required: true,
    default: true,
  },
  tags: [{
    type: String,
    required: true,
  }],
});

module.exports = moongose.model('Product', ProductSchema);
