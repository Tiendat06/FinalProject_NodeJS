const Order = require('../model/Order');
const OrderStatus = require('../model/OrderStatus');
const OrderStatusDetails = require('../model/OrderStatusDetails');
const UserRepository = require('../repository/UserRepository');
const ProductVariantRepository = require('../repository/ProductVariantRepository');
const OrderRepository = require('../repository/OrderRepository');
class OrderService {

  async createOrder(req, res) {
    const { user_id, product_variant_id, orderStatus_id, quantity = 1 } = req.body;

    //check user exists
    const user = await UserRepository.getUserById(user_id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }

    //check product_variant_id exists
    const productVariant = await ProductVariantRepository.getProductVariantById(product_variant_id);

    if (!productVariant) {
      return res.status(404).json({
        success: false,
        message: 'Product variant not found',
      });
    }

    // Check if order status exists
    const orderStatus = await OrderRepository.findOrderStatusById(orderStatus_id);
    if (!orderStatus) {
      return res.status(404).json({
        success: false,
        message: 'Order status not found',
      });
    }

    // Prepare the order data
    const newOrder = {
      user_id,
      product_variant_id,
      status_id: orderStatus._id,
      tax: 10, // Set your default tax value or calculate dynamically
      shippingFee: 20, // Set your default shipping fee or calculate dynamically
    };

    // Create the order
    const savedOrder = await OrderRepository.createOrder(newOrder);

    // Prepare the order details data
    const newOrderDetails = {
      order_id: savedOrder._id,
      product_variant_id: productVariant._id,
      quantity,
    };

    // Create order details
    await OrderRepository.createOrderDetails(newOrderDetails);

    // Send response back with the created order
    return res.status(201).json({
      status: true,
      message: 'Order created successfully',
      order: savedOrder,
    });
  }


  async updateOrderStatusDetails(req, res) {
    const { orderId } = req.params;
    const { statusId } = req.body;

    try {
      // Update or create the OrderStatusDetails
      const updatedStatusDetails = await OrderRepository.upsertOrderStatusDetails(orderId, statusId);

      return res.status(200).json({
        success: true,
        message: 'Order status updated successfully',
        data: updatedStatusDetails,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'An error occurred while updating order status',
        error: error.message,
      });
    }
  }
}

module.exports = new OrderService;