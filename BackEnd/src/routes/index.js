const siteRouter = require('./site');
const logRouter = require('./log');

function route(app) {
    app.use('/', siteRouter);
    app.use('/log', logRouter);
}

module.exports = route;