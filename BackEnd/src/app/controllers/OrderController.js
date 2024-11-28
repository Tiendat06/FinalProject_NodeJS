const OrderService = require('../services/OrderService');

class OrderController {

  async createOrder(req, res, next) {
    try {
      return await OrderService.createOrder(req, res); // Call service method
    } catch (error) {
      next(error);  // If there's an error, pass it to the next middleware
    }
  };

  updateOrderStatusDetails = async (req, res, next) => {
    return await OrderService.updateOrderStatusDetails(req, res);
  }
}

module.exports = new OrderController;