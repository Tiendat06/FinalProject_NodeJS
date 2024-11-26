const siteController = require('../controllers/SiteController');

class SiteMiddleWare{
    constructor(){}

    // [GET] /
    index = async (req, res, next) => {
        next();
    }
}

module.exports = new SiteMiddleWare;