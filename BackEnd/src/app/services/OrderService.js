// const orderRepository = require('../repository/OrderRepository');

const OrderStatus = require('../model/OrderStatus');
const OrderStatusDetails = require('../model/OrderStatusDetails');
const UserRepository = require('../repository/UserRepository');
const ProductVariantRepository = require('../repository/ProductVariantRepository');
const OrderRepository = require('../repository/OrderRepository');
const orderDetailsRepository = require('../repository/OrderDetailsRepository');
const addressRepository = require('../repository/AddressRepository');
const orderStatusRepository = require('../repository/OrderStatusRepository');
const orderStatusDetailsRepository = require('../repository/OrderStatusDetailsRepository');
const paymentMethodRepository = require('../repository/PaymentMethodRepository');
const paymentRepository = require('../repository/PaymentRepository');
const userRepository = require("../repository/UserRepository");
const accountRepository = require("../repository/AccountRepository");
const productVariantRepository = require('../repository/ProductVariantRepository');
const couponRepository = require('../repository/CouponRepository');
const mailer = require("nodemailer");
const bcrypt = require("bcrypt");

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

    getUserOrder = async (req, res) => {
        const {user_id} = req.query;
        try {
            const userOrder = await OrderRepository.getOrderByUserAndDateCreatedIsNull(user_id);
            if(!userOrder) throw new Error('Load user order failed !');

            const order_id = userOrder._id;
            const userOrderDetails = await orderDetailsRepository.getOrderDetailsByOrderId(order_id);
            if(userOrderDetails.length === 0) throw new Error('Load user order failed !');

            const userShippingAddress = await addressRepository.getAddressesByUserId(user_id);
            if(userShippingAddress === 0) throw new Error('Load user address failed !');
            
            return res.status(200).json({
                status: true,
                dataOrderDetails: userOrderDetails,
                dataOrder: userOrder,
                dataShippingAddress: userShippingAddress,
                msg: 'Load user order successfully !',
            })

        } catch (e) {
            return res.status(404).json({
                status: false,
                msg: e.message,
            })
        }
    }

    placeOrder = async (req, res) => {
        const {user_id, totalBill, address_id, payment_method_name, products, coupon_id} = req.body;
        const error = req.flash('error');
        try {
            if(error.length !== 0) throw new Error(error[0]);
            if (coupon_id) {
                const coupon = await couponRepository.getCouponById(coupon_id);
                if(!coupon) throw new Error('Coupon not found');
                const coupon_point = coupon.point;

                const user = await userRepository.getUserById(user_id);
                if(!user) throw new Error('User not found !');
                const user_point = user.point;

                const result = user_point - coupon_point;

                const userPointUpdateData = {
                    _id: user_id, point: result
                }
                const userPointUpdated = await userRepository.updateUserById(userPointUpdateData);
                if(!userPointUpdated.acknowledged) throw new Error('Update user point failed !');
            }

            const newOrderData = {
                user_id, address_id,
                createdAt: Date.now(), updatedAt: Date.now()
            }
            // update order
            const orderUpdated = await OrderRepository.findOneOrderAndUpdate(newOrderData);
            if (!orderUpdated) throw new Error('Order not found !');
            const order_id = orderUpdated._id;

            // create status
            const orderStatusDetailsData = [
                {
                    order_id,
                    status_id: await orderStatusRepository.getOrderStatusByName('Pending'),
                    createdAt: Date.now(),
                    is_check: true
                },
                {
                    order_id,
                    status_id: await orderStatusRepository.getOrderStatusByName('Confirmed'),
                },
                {
                    order_id,
                    status_id: await orderStatusRepository.getOrderStatusByName('Shipping'),
                },
                {
                    order_id,
                    status_id: await orderStatusRepository.getOrderStatusByName('Delivered'),
                },
            ]
            const orderStatusDetails = await orderStatusDetailsRepository.insertOrderStatusDetails(orderStatusDetailsData);
            if(orderStatusDetails.length === 0) throw new Error('Add to order failed !');

            // get payment method
            const payment_method = await paymentMethodRepository.getPaymentMethodByName(payment_method_name);
            if(!payment_method) throw new Error('Payment method not found !');
            const payment_method_id = await payment_method._id;

            // add payment
            const paymentData = {
                order_id, payment_method_id, total_money: totalBill
            }
            const paymentAdd = await paymentRepository.insertPayment(paymentData);
            if(paymentAdd.length === 0) throw new Error('Add payment failed !');

            // reduce product quantity
            for (const p of products) {
                const purchase_quantity = p.quantity;
                const product_variant_id = p.product_variant_id._id;
                const product_variant_stock_quantity = p.product_variant_id.variant_quantity;
                const remaining_stock_quantity = product_variant_stock_quantity - purchase_quantity;
                const productVariantUpdated = await productVariantRepository.updateProductVariantById(product_variant_id, {variant_quantity: remaining_stock_quantity});
                if(!productVariantUpdated) throw new Error('Update productVariant failed !');
            }

            // send invoice
            return this.sendMailConfirmOrder(req, res)
                .then(() => {
                    return res.status(200).json({
                        status: true,
                        msg: 'Please check your email !'
                    })
                })
                .catch(e => {
                    throw new Error(e.message);
                })

        } catch (e) {
            return res.status(400).json({
                status: false,
                msg: e.message,
            })
        }
    }

    sendMailConfirmOrder = async (req, res) => {
        const {email, products} = req.body;

        try {
            const transporter = mailer.createTransport({
                host: process.env.MAIL_SERVER,
                port: process.env.MAIL_PORT,
                secure: false,
                auth: {
                    user: process.env.MAIL_USERNAME,
                    pass: process.env.MAIL_PASSWORD
                }
            });

            const rows = products.map((item, index) => `
                <tr>
                    <td style="padding: 10px;">${index + 1}</td>
                    <td style="padding: 10px;">${item.product_variant_id.product_name}</td>
                    <td style="padding: 10px;">${item.product_variant_id.product_color}</td>
                    <td style="padding: 10px;">${item.quantity}</td>
                    <td style="padding: 10px;">$${item.quantity * item.product_variant_id.retail_price}</td>
                </tr>
            `).join('');

            const timestamp = Date.now();
            const formattedDate = new Intl.DateTimeFormat('en-GB', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false,
                timeZone: 'Asia/Ho_Chi_Minh'
            }).format(timestamp);

            const mailOptions = {
                from: process.env.MAIL_USERNAME,
                to: email,
                subject: 'Email Order Confirmation',
                html: `
                <h2>Order Confirmation at ${formattedDate}</h2>
                <table border="1">
                    <thead style="background-color: #f1f1f1;">
                        <tr>
                            <th style="padding: 5px;">#</th>
                            <th style="padding: 5px;">Name</th>
                            <th style="padding: 5px;">Color</th>
                            <th style="padding: 5px;">Quantity</th>
                            <th style="padding: 5px;">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${rows}                       
                    </tbody>
                </table>`,
            }
            await transporter.sendMail(mailOptions);

        } catch (e) {
            return res.status(400).json({
                status: false,
                msg: e.message
            })
        }
    }
}

module.exports = new OrderService;
