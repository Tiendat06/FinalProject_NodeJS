const siteRouter = require('./site');
const logRouter = require('./log');
const userRouter = require('./user');

function route(app) {
    app.use('/', siteRouter);
    app.use('/log', logRouter);
    app.use('/user', userRouter);
}

module.exports = route;