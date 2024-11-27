const wishListRepository = require('../repository/WishListRepository');

class WishListService {

    getUserWishList = async (req, res) => {
        const {user_id} = req.query;
        const userWishList = await wishListRepository.getWishListsByUserId(user_id);
        return res.status(200).json({
            status: true,
            data: userWishList,
            msg: 'Load wish list successfully !',
        });
    }

    addWishList = async (req, res) => {
        const {user_id, product_id} = req.body;
        const error = req.flash('error');

        try {
            if(error.length !== 0) throw new Error(error[0]);

            const wishListExist = await wishListRepository.checkExistingWishList(user_id, product_id);
            if(!wishListExist) {
                const wish_list = await wishListRepository.addWishList({user_id, product_id});
                if(wish_list.length === 0) throw new Error(error[0]);
                return res.status(200).json({
                    status: true,
                    msg: 'Add to wish list successfully !',
                })
            }

            return res.status(200).json({
                status: true,
                msg: 'Product is existing in wish list !',
            })
        } catch (e) {
            return res.status(400).json({
                status: false,
                msg: e.message
            })
        }
    }

    deleteWishList = async (req, res) => {
        const {id} = req.params;

        try {
            const deletedWishList = await wishListRepository.deleteWishListById(id);
            if(!deletedWishList.acknowledged) throw new Error('Delete failed !');
            return res.status(200).json({
                status: true,
                msg: 'Remove product from wish list successfully !',
            })
        } catch (e) {
            return res.status(400).json({
                status: false,
                msg: e.message
            })
        }
    }
}

module.exports = new WishListService;