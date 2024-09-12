const siteController = require('../controllers/SiteController');

class SiteMiddleWare{
    constructor(){}

    // [GET] /
    index = (req, res, next) => {
        siteController.index(req, res, next);
    }
}

module.exports = new SiteMiddleWare;