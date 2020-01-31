const moongose = require('mongoose');

const OrderSchema = moongose.Schema({
  number: {
    type: String,
    required: true,
  },
  customer: {
    type: moongose.Schema.Types.ObjectId,
    ref: 'Customer',
  },
  createDate: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  status: {
    type: String,
    required: true,
    enum: ['created', 'done'],
    default: 'created',
  },
  items: [{
    quantity: {
      type: Number,
      required: true,
      default: 1,
    },
    price: {
      type: Number,
      required: true,
    },
    product: {
      type: moongose.Schema.Types.ObjectId,
      ref: 'Product',
    },
  }],
});

module.exports = moongose.model('Order', OrderSchema);
