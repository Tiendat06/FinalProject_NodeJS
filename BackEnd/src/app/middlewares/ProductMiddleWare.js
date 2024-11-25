
class ProductMiddleWare {

    index = (req, res, next) => {
        next();
    }
}

module.exports = new ProductMiddleWare;