const {validationResult} = require("express-validator");
const orderStatusRepository = require('../repository/OrderStatusRepository');

class OrderMiddleWare{
    // [GET] /
    index = (req, res, next) => {
        next();
    }

    place_order = (req, res, next) => {
        const result = validationResult(req);
        let error = '';

        if(!result.isEmpty()){
            error = result.array()[0].msg;
        }
        req.flash('error', error);
        next();
    }

    updateOrderStatusDetails = async (req, res, next) => {
        const {order_status_name, statusId} = req.body;
        let error = '';
        console.log(order_status_name);
        if(order_status_name === 'Pending'){
            const order_status = await orderStatusRepository.getOrderStatusByName('Confirmed');
            const status_id = order_status._id;
            if(status_id.toString() === statusId) next();
            else error = 'Please check the "confirmed" status !'
        } else if(order_status_name === 'Confirmed'){
            const order_status = await orderStatusRepository.getOrderStatusByName('Shipping');
            const status_id = order_status._id;
            if(status_id.toString() === statusId) next();
            else error = 'Please check the "shipping" status !'
        } else if(order_status_name === 'Shipping'){
            const order_status = await orderStatusRepository.getOrderStatusByName('Delivered');
            const status_id = order_status._id;
            if(status_id.toString() === statusId) next();
            else error = 'Please check the "delivered" status !'
        }

        if(error.length > 0){
            return res.status(400).json({
                status: false,
                message: error,
            })
        }
    }
}
module.exports = new OrderMiddleWare;