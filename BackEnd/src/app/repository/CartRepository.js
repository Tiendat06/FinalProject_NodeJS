const Cart = require('../model/Cart');

class CartRepository {
    getCartByUserId = (userId) => {
        return Cart.find({ user_id: userId })
            .populate('product_variant_id')
            .then(cartItems => cartItems)
            .catch(err => console.log(err));
    }

    updateCartItem = (userId, productVariantId, quantity) => {
        return Cart.findOneAndUpdate(
            { user_id: userId, product_variant_id: productVariantId },
            { $set: { quantity } },
            { new: true }
        )
        .populate('product_variant_id')
        .then(cartItem => cartItem)
        .catch(err => console.log(err));
    }
}

module.exports = new CartRepository;