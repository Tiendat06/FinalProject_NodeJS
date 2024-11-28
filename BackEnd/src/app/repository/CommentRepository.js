const Comment = require('../model/Comment');

class CommentRepository{

    getCommentByProductId = (product_id) => {
        return Comment.find({product_id, deleted: false})
            .populate('user_id')
            .populate('product_id')
            .then(comments => comments)
            .catch(err => console.log(err));
    }

    insertComment = (commentData) => {
        return Comment.insertMany(commentData)
            .then(comment => comment)
            .catch(err => console.log(err));
    }
}

module.exports = new CommentRepository;