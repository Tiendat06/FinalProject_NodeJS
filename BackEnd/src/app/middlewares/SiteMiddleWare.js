const siteController = require('../controllers/SiteController');

class SiteMiddleWare{
    constructor(){}

    // [GET] /
    index = async (req, res, next) => {
        await siteController.index(req, res, next);
    }
}

module.exports = new SiteMiddleWare;