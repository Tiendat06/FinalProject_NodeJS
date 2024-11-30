const cartRepository = require('../repository/CartRepository');
const couponRepository = require('../repository/CouponRepository');
const userRepository = require('../repository/UserRepository');
const orderRepository = require('../repository/OrderRepository');
const orderDetailsRepository = require('../repository/OrderDetailsRepository');
const orderStatusDetailsRepository = require('../repository/OrderStatusDetailsRepository');
const orderStatusRepository = require('../repository/OrderStatusRepository');

class CartService {
    async getCartByUserId(req, res) {
        try {
            const userId = req.query.user_id;
            const cartItems = await cartRepository.getCartByUserId(userId);
            // if (!cartItems || cartItems.length === 0) {
            //     return res.status(404).json({
            //         status: false,
            //         msg: 'No items found in the cart'
            //     });
            // }
            return res.status(200).json({
                status: true,
                data: cartItems
            });
            // return await cartRepository.getCartByUserId(userId);
        } catch (error) {
            // throw new Error('Error fetching cart items');
            return res.status(500).json({
                status: false,
                msg: 'Error fetching cart items'
            });
        }
    }

    async updateCart(userId, product_variant_id, quantity) {
        try {
            return await cartRepository.updateCart(userId, product_variant_id, quantity);
        } catch (error) {
            throw new Error('Error updating cart');
        }
    }

    updateCartItemNew = async (req, res) => {
        try {
            const { quantity } = req.body;
            const { cartId } = req.params;
            const error = req.flash('error');
            // console.log(error);
            if(error.length !== 0) throw new Error(error[0]);

            const updatedCart = await cartRepository.updateCartItemNew(cartId, quantity);
            if(!updatedCart.acknowledged) throw new Error('Update cart failed !')
            return res.status(200).json({
                status: true,
                msg: 'Cart updated successfully',
            });

            // return await cartRepository.updateCartItemNew(cartId, quantity);
        } catch (e) {
            return res.status(400).json({
                status: false,
                msg: e.message,
            });
        }
    }

    async deleteCartItem(req, res) {
        try {
            const { cartId } = req.params;
            // const deletedCartItem = await cartService.deleteCartItem(userId, product_variant_id);
            const deletedCartItem = await cartRepository.deleteCartItemNewById(cartId);
            if(!deletedCartItem.acknowledged) throw new Error('Error in deleting cart item');

            return res.status(200).json({
                status: true,
                msg: 'Cart item removed successfully !',
                // deletedCartItem
            });
            // return await cartRepository.deleteCartItem(userId, product_variant_id);
        } catch (error) {
            // throw new Error('Error deleting cart item');
            return res.status(400).json({
                status: false,
                msg: error.message
            });
        }
    }

    addCartItem = async (req, res) => {
        const {user_id, quantity, product_variant_id} = req.body;

        console.log({product_variant_id, user_id, quantity});
        const error = req.flash('error');
        try {
            if(error.length !== 0) throw new Error(error[0]);

            // const cartData = {
            //     product_variant_id, user_id, quantity
            // }
            const cartItem = await cartRepository.addCartItem(req.body);
            if(cartItem.length === 0) throw new Error('Add cart failed !');

            return res.status(201).send({
                status: true,
                data: cartItem,
                msg: 'Add cart successfully !'
            })
        } catch (e) {
            return res.status(400).send({
                status: false,
                msg: e.message,
            })
        }
    }

    addCouponCode = async (req, res) => {
        const {code, user_id} = req.body;
        const error = req.flash('error');

        try {
            if(error.length !== 0) throw new Error(error[0]);
            const user = await userRepository.getUserById(user_id);
            if(!user) throw new Error('User not found!');
            const point = user.point;

            const couponItem = await couponRepository.getCouponByCode(code, point);
            if(!couponItem) throw new Error(`Code '${code}' not found or you do not have enough point to use this code !`);
            return res.status(200).json({
                status: true,
                data: couponItem,
                msg: 'Add coupon successfully !',
            })
        } catch (e) {
            return res.status(400).json({
                status: false,
                msg: e.message,
            })
        }
    }

    addCartOrder = async (req, res) => {
        const {user_id, coupon_id, tax, shippingFee, products} = req.body;
        const error = req.flash('error');
        let orderDetailsData = [];

        try {
            if (error.length !== 0) throw new Error(error[0]);
            const orderData = {
                user_id, coupon_id, tax, shippingFee, createdAt: null, updatedAt: null
            }
            const orderAddData = await orderRepository.addCartToOrder(orderData);
            if(orderAddData.length === 0) throw new Error('Add to order failed !');
            const order_id = orderAddData[0]._id;

            for(const item of products) {
                let cart = await cartRepository.getCartById(item._id);
                let product_variant_id = cart.product_variant_id;
                orderDetailsData.push({
                    order_id,
                    product_variant_id,
                    quantity: item.quantity
                })
            }

            const orderDetailsAdd = await orderDetailsRepository.insertOrderDetailsFromCart(orderDetailsData);
            if(orderDetailsAdd.length === 0) throw new Error('Add to order failed !');

            const deletedCartItem = await cartRepository.deleteCartByUserId(user_id);
            if(!deletedCartItem.acknowledged) throw new Error('Error in add to order !');

            // const orderStatusDetailsData = [
            //     {
            //         order_id,
            //         status_id: await orderStatusRepository.getOrderStatusByName('Pending'),
            //         createdAt: Date.now(),
            //         is_check: true
            //     },
            //     {
            //         order_id,
            //         status_id: await orderStatusRepository.getOrderStatusByName('Confirmed'),
            //     },
            //     {
            //         order_id,
            //         status_id: await orderStatusRepository.getOrderStatusByName('Shipping'),
            //     },
            //     {
            //         order_id,
            //         status_id: await orderStatusRepository.getOrderStatusByName('Delivered'),
            //     },
            // ]

            // const orderStatusDetails = await orderStatusDetailsRepository.insertOrderStatusDetails(orderStatusDetailsData);
            // if(orderStatusDetails.length === 0) throw new Error('Add to order failed !');

            // console.log(req.body);
            // console.log(error);
            return res.status(200).json({
                status: true,
                msg: 'Proceed to order !',
            })
        } catch (e) {
            return res.status(400).json({
                status: false,
                msg: e.message,
            })
        }
    }
}

module.exports = new CartService();