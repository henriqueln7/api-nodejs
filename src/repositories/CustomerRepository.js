const Customer = require('../models/Customer');

class CustomerRepository {
  static getAll() {
    return Customer.find({}, 'name email');
  }

  static get(id) {
    return Customer.findById(id, 'name email');
  }

  static save({ name, email, password }) {
    return Customer.create({
      name,
      email,
      password,
    });
  }

  static update(id, data) {
    return Customer.findByIdAndUpdate(id, {
      name: data.name,
      email: data.email,
      password: data.password,
    });
  }

  static delete(id) {
    return Customer.findByIdAndDelete(id);
  }

  static authenticate(email) {
    return Customer.findOne({ email }).select('+password');
  }
}

module.exports = CustomerRepository;
