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
// const ProductCategory = require('../model/ProductCategory');
// const Product = require('../model/Product');
// const ProductVariant = require('../model/ProductVariant');
// const Rating = require('../model/Rating');
// const Role = require('../model/Role');
// const User = require('../model/User');
// const UserCoupon = require('../model/UserCoupon');
// const WishList = require('../model/WishList');

class SiteController {

    // [GET] /
    index = async (req, res, next) => {
        return await siteService.index(req, res);
    }

}

module.exports = new SiteController;