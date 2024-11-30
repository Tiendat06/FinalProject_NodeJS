const Cart = require('../model/Cart');

class CartRepository {
    async getCartByUserId(userId) {
        try {
            return await Cart.find({ user_id: userId }).populate('product_variant_id').exec();
        } catch (error) {
            throw new Error('Error fetching cart items');
        }
    }
    async updateCart(userId, product_variant_id, quantity) {
        try {
            const cartItem = await Cart.findOne({ user_id: userId, product_variant_id });
            if (cartItem) {
                cartItem.quantity = quantity;
                return await cartItem.save();
            } else {
                const newCartItem = new Cart({ user_id: userId, product_variant_id, quantity });
                return await newCartItem.save();
            }
        } catch (error) {
            throw new Error('Error updating cart');
        }
    }

    async deleteCartItem(userId, product_variant_id) {
        try {
            return await Cart.findOneAndDelete({ user_id: userId, product_variant_id });
        } catch (error) {
            throw new Error('Error deleting cart item');
        }
    }
}

module.exports = new CartRepository();