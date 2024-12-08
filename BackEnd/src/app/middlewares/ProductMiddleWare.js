const {validationResult} = require("express-validator");
const productCategoryRepository = require('../repository/ProductCategoryRepository');

class ProductMiddleWare {

    index = (req, res, next) => {
        next();
    }

    product_details = (req, res, next) => {
        next();
    }

    comment_product = (req, res, next) => {
        const result = validationResult(req);
        const {star} = req.body;
        let error = '';

        if(!result.isEmpty()){
            error = result.array()[0].msg;
        }
        req.flash('error', error);
        // console.log('middle ware');
        next();
    }

    add_wish_list = (req, res, next) => {
        const result = validationResult(req);
        let error = '';
        if(!result.isEmpty()){
            error = result.array()[0].msg;
        }
        req.flash('error', error);
        next();
    }

    get_variant_by_product = (req, res, next) => {
        const result = validationResult(req);
        let error = '';
        if(!result.isEmpty()){
            error = result.array()[0].msg;
        }
        req.flash('error', error);
        next();
    }

    updateProduct = async (req, res, next) => {
        const {category_name} = req.body;
        // return res.status(200).json({
        //     status: true,
        //     data: req.body
        // })
        console.log(req.body);
        const productCategory = await productCategoryRepository.getCategoryByName(category_name);
        if (!productCategory){
            return res.status(400).json({
                status: false,
                msg: 'Category not found',
            })
        }
        req.body.category_id = productCategory._id;
        next();
    }

    add_product_category = (req, res, next) => {
        const result = validationResult(req);
        let error = '';
        if(!result.isEmpty()){
            error = result.array()[0].msg;
        }
        req.flash('error', error);
        next();
    }

    update_product_category = (req, res, next) => {
        const result = validationResult(req);
        let error = '';
        if(!result.isEmpty()){
            error = result.array()[0].msg;
        }
        req.flash('error', error);
        next();
    }
}

module.exports = new ProductMiddleWare;