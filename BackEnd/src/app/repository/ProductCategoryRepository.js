const ProductCategory = require('../model/ProductCategory');

class ProductCategoryRepository{

    getCategoryById = (_id) => {
        return ProductCategory.findOne({_id})
            .then(category => category)
            .catch(err => console.log(err));
    }

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

    updateProductCategory = ({_id, ...categoryData}) => {
        return ProductCategory.updateOne({_id}, {$set: categoryData})
            .then(value => value)
            .catch(err => console.log(err));
    }

    deleteProductCategory = (_id) => {
        return ProductCategory.deleteOne({_id})
            .then(value => value)
            .catch(err => console.log(err));
    }
}

module.exports = new ProductCategoryRepository;