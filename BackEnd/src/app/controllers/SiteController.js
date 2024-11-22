const siteService = require('../services/SiteService');
const logService = require('../services/LogService');

// const Account = require('../model/Account');
// const Address = require('../model/Address');
// const Cart = require('../model/Cart');
// const Comment = require('../model/Comment');
// const Coupon = require('../model/Coupon');
// const Order = require('../model/Order');
// const OrderDetails = require('../model/OrderDetails');
// const OrderStatus = require('../model/OrderStatus');
// const Payment = require('../model/Payment');
// const PaymentMethod = require('../model/PaymentMethod');
// const Product = require('../model/Product');
// const ProductCategory = require('../model/ProductCategory');
// const ProductVariant = require('../model/ProductVariant');
// const Rating = require('../model/Rating');
// const Role = require('../model/Role');
// const User = require('../model/User');
// const UserCoupon = require('../model/UserCoupon');
// const WishList = require('../model/WishList');

class SiteController{

    // [GET] /
    index = (req, res, next) => {
        const data = siteService.index(req, res);
        return res.json({
            "status": 200,
            "message": "DashboardHome Page",
            "data": data
        })
    }

}

module.exports = new SiteController;