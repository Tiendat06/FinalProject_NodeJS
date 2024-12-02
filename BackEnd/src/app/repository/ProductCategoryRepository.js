const ProductCategory = require('../model/ProductCategory');

class ProductCategoryRepository{

    getCategoryByName = (category_name) => {
        return ProductCategory.findOne({category_name})
            .then(category => category)
            .catch(err => console.log(err));
    }
}

module.exports = new ProductCategoryRepository;