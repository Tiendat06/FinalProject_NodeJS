const siteService = require('../services/SiteService');

class SiteController{

    // [GET] /
    index = (req, res, next) => {
        let data = siteService.index();
        res.json({
            "status": 200,
            "message": "DashboardHome Page",
            "data": data
        })
    }
}

module.exports = new SiteController;