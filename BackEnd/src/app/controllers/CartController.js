const cartService = require('../services/CartService');

class CartController {
    async getCart(req, res) {
        try {
            const userId = req.userData._id;
            const cartItems = await cartService.getCartByUserId(userId);
            if (!cartItems || cartItems.length === 0) {
                return res.status(404).json({
                    status: false,
                    msg: 'No items found in the cart'
                });
            }
            res.status(200).json({
                status: true,
                cartItems
            });
        } catch (error) {
            res.status(500).json({
                status: false,
                msg: 'Error fetching cart items'
            });
        }
    }

    async updateCart(req, res) {
        try {
            const userId = req.userData._id;
            const { product_variant_id, quantity } = req.body;
            const updatedCart = await cartService.updateCart(userId, product_variant_id, quantity);
            res.status(200).json({
                status: true,
                msg: 'Cart updated successfully',
                updatedCart
            });
        } catch (error) {
            res.status(500).json({
                status: false,
                msg: 'Error updating cart'
            });
        }
    }

    async deleteCartItem(req, res) {
        try {
            const userId = req.userData._id; 
            const { product_variant_id } = req.body;
            const deletedCartItem = await cartService.deleteCartItem(userId, product_variant_id);
            res.status(200).json({
                status: true,
                msg: 'Cart item deleted successfully',
                deletedCartItem
            });
        } catch (error) {
            res.status(500).json({
                status: false,
                msg: 'Error deleting cart item'
            });
        }
    }
}

module.exports = new CartController();