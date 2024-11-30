// const orderRepository = require('../repository/OrderRepository');

const OrderStatus = require('../model/OrderStatus');
const OrderStatusDetails = require('../model/OrderStatusDetails');
const UserRepository = require('../repository/UserRepository');
const ProductVariantRepository = require('../repository/ProductVariantRepository');
const OrderRepository = require('../repository/OrderRepository');
class OrderService {

  //create an order
  async createOrder(req, res) {
    const { user_id, orderStatus_id, cart } = req.body;

    // Check if user exists
    const user = await UserRepository.getUserById(user_id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
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

    // Create the order
    const newOrder = {
      user_id,
      status_id: orderStatus._id,
      tax: 10, // Set your default tax value or calculate dynamically
      shippingFee: 20, // Set your default shipping fee or calculate dynamically
    };

    // Save the order
    const savedOrder = await OrderRepository.createOrder(newOrder);

    // Get all statuses (Pending, Confirmed, Shipping, Delivered, Cancel)
    const statuses = await OrderStatus.find({
      status: { $in: ['Pending', 'Confirmed', 'Shipping', 'Delivered'] }
    });

    // Create the OrderStatusDetails records for the new order
    const orderStatusDetailsPromises = statuses.map(status => {
      const isCheck = status.status === 'Pending';  // Set is_check to true for "Pending"
      const createdAt = isCheck ? new Date() : null;  // Set current date for "Pending", null for others

      return OrderStatusDetails.create({
        order_id: savedOrder._id,
        status_id: status._id,
        createdAt: createdAt,
        is_check: isCheck,
      });
    });

    // Wait for all order status details to be saved
    await Promise.all(orderStatusDetailsPromises);



    // Process the cart items
    const orderDetailsPromises = cart.map(async (item) => {
      const { product_variant_id, quantity } = item;

      // Check if the product variant exists
      const productVariant = await ProductVariantRepository.getProductVariantById(product_variant_id);
      if (!productVariant) {
        return res.status(404).json({
          success: false,
          message: `Product variant with ID ${product_variant_id} not found`,
        });
      }

      // Prepare the order details data
      const newOrderDetails = {
        order_id: savedOrder._id,
        product_variant_id: productVariant._id,
        quantity: quantity || 1, // Default to 1 if quantity is not provided
      };

      // Create the order details
      await OrderRepository.createOrderDetails(newOrderDetails);
    });

    // Wait for all order details to be saved
    await Promise.all(orderDetailsPromises);

    // Fetch order details and include them in the response
    const orderDetails = await OrderRepository.getOrderDetailsByOrderId(savedOrder._id);

    // Send response back with the created order and order details
    return res.status(201).json({
      status: true,
      message: 'Order created successfully',
      order: {
        ...savedOrder.toObject(), // Return order properties
        order_details: orderDetails, // Include the created order details
      },
    });
  }


  async updateOrderStatusDetails(req, res) {
    const { orderId } = req.params;
    const { statusId } = req.body;

    // Check if the order exists
    const orderExists = await OrderRepository.doesOrderExist(orderId);
    if (!orderExists) {
      return res.status(404).json({
        success: false,
        message: 'Order not found',
      });
    }

    // Check if the status exists
    const statusExists = await OrderRepository.doesStatusExist(statusId);
    if (!statusExists) {
      return res.status(404).json({
        success: false,
        message: 'Order status not found',
      });
    }

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

  async getOrdersByUserId(userId) {
    try {
      return await OrderRepository.getOrdersByUserId(userId);
    } catch (error) {
      throw new Error('Error fetching orders');
    }
  }
  async getOrderDetailsByOrderId(orderId) {
    try {
      return await OrderRepository.getOrderDetailsByOrderId(orderId);
    } catch (error) {
      throw new Error('Error fetching order details');
    }
  }
}

module.exports = new OrderService;
