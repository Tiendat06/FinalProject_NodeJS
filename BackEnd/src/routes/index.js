const siteRouter = require('./site');
const logRouter = require('./log');
const userRouter = require('./user');
const addressRouter = require('./address');
const productRouter = require('./product');
const orderRouter = require('./order');
const cartRouter = require('./cart');

function route(app) {
    app.use('/', siteRouter);
    app.use('/log', logRouter);
    app.use('/user', userRouter);
    app.use('/address', addressRouter);
    app.use('/product', productRouter);
    app.use('/order', orderRouter);
    app.use('/cart', cartRouter);
}

module.exports = route;