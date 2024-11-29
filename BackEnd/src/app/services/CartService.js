const cartRepository = require('../repository/CartRepository');

class CartService {
    async getCartByUserId(userId) {
        try {
            return await cartRepository.getCartByUserId(userId);
        } catch (error) {
            throw new Error('Error fetching cart items');
        }
    }

    async updateCart(userId, product_variant_id, quantity) {
        try {
            return await cartRepository.updateCart(userId, product_variant_id, quantity);
        } catch (error) {
            throw new Error('Error updating cart');
        }
    }

    async deleteCartItem(userId, product_variant_id) {
        try {
            return await cartRepository.deleteCartItem(userId, product_variant_id);
        } catch (error) {
            throw new Error('Error deleting cart item');
        }
    }
}

module.exports = new CartService();