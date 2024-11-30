class OrderMiddleWare{
    // [GET] /
    index = async (req, res, next) => {
        next();
    }
}
module.exports = new OrderMiddleWare;