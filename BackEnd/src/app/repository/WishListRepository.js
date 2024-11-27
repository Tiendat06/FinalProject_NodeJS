const WishList = require('../model/WishList');

class WishListRepository {

    checkExistingWishList = (user_id, product_id) => {
        return WishList.findOne({user_id, product_id})
            .then(wishList => wishList)
            .catch(err => console.log(err));
    }

    addWishList = (wishListData) => {
        return WishList.insertMany(wishListData)
            .then(wishList => wishList)
            .catch(err => console.log(err));
    }
}

module.exports = new WishListRepository;