const Comment = require('../model/Comment');

class CommentRepository{

    getCommentByProductId = (product_id) => {
        return Comment.find({product_id, deleted: false})
            .populate('user_id')
            .populate('product_id')
            .then(comments => comments)
            .catch(err => console.log(err));
    }

    getCommentById = (_id) => {
        return Comment.findOne({_id})
            .populate('user_id')
            .populate('product_id')
            .then(comment => comment)
            .catch(err => console.log(err));
    }

    insertComment = (commentData) => {
        return Comment.insertMany(commentData)
            .then(comment => comment)
            .catch(err => console.log(err));
    }

    getCommentsWithLimitDocument = (limit) => {
        return Comment.find()
            .populate('user_id')
            .populate('product_id')
            .limit(limit)
            .sort({_id: -1})
            .then(comments => comments)
            .catch(err => console.log(err));
    }

    //Top reviewed products
    getTopReviewedProducts = (limit) => {
        return Comment.aggregate([
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
            .catch(err => {
                console.log('Aggregation Error:', err);
                return [];
            });
    }
}

module.exports = new CommentRepository;