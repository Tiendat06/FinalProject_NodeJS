const Cart = require('../model/Cart');

class CartRepository {

    getCartById = (_id) => {
        return Cart.findOne({_id})
            .then(cart => cart)
            .catch(err => console.log(err));
    }

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

    updateCartItemNew = (_id, quantity) => {
        return Cart.updateOne({_id}, {$set: {quantity}})
            .then(value => value)
            .catch(error => console.log(error));
    }

    async deleteCartItem(userId, product_variant_id) {
        try {
            return await Cart.findOneAndDelete({ user_id: userId, product_variant_id });
        } catch (error) {
            throw new Error('Error deleting cart item');
        }
    }

    deleteCartItemNewById = (_id) => {
        return Cart.deleteOne({_id})
            .then(value => value)
            .catch(error => console.log(error));
    }

    addCartItem = (cartData) => {
        return Cart.insertMany(cartData)
            .then(cart => cart)
            .catch(error => console.log(error));
    }

    deleteCartByUserId = (user_id) => {
        return Cart.deleteMany({ user_id })
            .then(value => value)
            .catch(error => console.log(error));
    }

    checkProductVariantIsExistInUserCart = (product_variant_id, user_id) => {
        return Cart.findOne({product_variant_id, user_id})
            .then(cart => cart)
            .catch(err => console.log(err));
    }
}

module.exports = new CartRepository();