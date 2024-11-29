class CartMiddleware {
    // [GET] /cart
    index = async (req, res, next) => {
        next();
    }
}

module.exports = new CartMiddleware();