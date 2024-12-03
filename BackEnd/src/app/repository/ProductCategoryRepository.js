const ProductCategory = require('../model/ProductCategory');

class ProductCategoryRepository{

    getCategoryByName = (category_name) => {
        return ProductCategory.findOne({category_name})
            .then(category => category)
            .catch(err => console.log(err));
    }

    getAllCategory = () => {
        return ProductCategory.find()
            .then(category => category)
            .catch(err => console.log(err));
    }

    insertProductCategory = (categoryData) => {
        return ProductCategory.insertMany(categoryData)
            .then(categoryData => categoryData)
            .catch(err => console.log(err))
    }
}

module.exports = new ProductCategoryRepository;