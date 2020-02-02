const guid = require('guid');
const Order = require('../models/Order');

class CustomerRepository {
  static getAll() {
    return Order.find({}, 'number status customer items')
      .populate('customer', 'name')
      .populate('items.product', 'title');
  }

  static get(id) {
    return Order.findById(id)
      .populate('customer')
      .populate('items.product');
  }

  static save(customer, items) {
    const number = guid.raw().substring(0, 5);
    return Order.create({
      number,
      customer,
      items,
    });
  }

  static delete(id) {
    return Order.findByIdAndDelete(id);
  }
}

module.exports = CustomerRepository;
