const Rating = require('../model/Rating');

class RatingRepository{

    getRatingByProductId = (product_id) => {
        return Rating.find({product_id, deleted: false})
            .populate('user_id')
            .populate('product_id')
            .then(rating => rating)
            .catch(err => console.log(err))
    }

    insertRating = (ratingData) => {
        return Rating.insertMany(ratingData)
            .then(rating => rating)
            .catch(err => console.log(err));
    }

    getRatingCountByStar = (star, product_id) => {
        return Rating.countDocuments({star, product_id})
            .then(count => count)
            .catch(err => console.log(err));
    }
}

module.exports = new RatingRepository;