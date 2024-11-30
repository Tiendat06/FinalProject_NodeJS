const cartService = require('../services/CartService');

class CartController {
    async getCart(req, res) {
        return await cartService.getCartByUserId(req, res);
    }

    async updateCart(req, res) {
        return await cartService.updateCartItemNew(req, res);
    }

    async deleteCartItem(req, res) {
        return await cartService.deleteCartItem(req, res);
    }

    add_cart = async (req, res, next) => {
        return await cartService.addCartItem(req, res);
    }

    add_coupon = async (req, res, next) => {
        return await cartService.addCouponCode(req, res);
    }

    add_cart_order = async (req, res, next) => {
        return await cartService.addCartOrder(req, res);
    }
}

module.exports = new CartController();