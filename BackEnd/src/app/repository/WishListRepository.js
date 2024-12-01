const WishList = require('../model/WishList');

class WishListRepository {

    getWishListsByUserId = (user_id) => {
        return WishList.find({user_id})
            .populate('user_id')
            .populate('product_id')
            .then(wishlists => wishlists)
            .catch(err => console.log(err));
    }

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

    deleteWishListById = (_id) => {
        return WishList.deleteOne({_id})
            .then(value => value)
            .catch(err => console.log(err));
    }
    getTopWishListedProducts = (limit) => {
        return WishList.aggregate([
            { $group: { _id: "$product_id", count: { $sum: 1 } } },
            { $sort: { count: -1 } },
            { $limit: limit },
            {
                $lookup: {
                    from: "product",
                    localField: "_id",
                    foreignField: "_id",
                    as: "product"
                }
            },
            { $unwind: "$product" }
        ])
            .then(products => {
                return products;
            })
            .catch(err => console.log(err));
    }
}

module.exports = new WishListRepository;