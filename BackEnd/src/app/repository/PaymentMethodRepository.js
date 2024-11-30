const PaymentMethod = require('../model/PaymentMethod');

class PaymentMethodRepository {

    getPaymentMethodByName = (payment_method_name) => {
        return PaymentMethod.findOne({payment_method_name})
            .then(paymentMethod => paymentMethod)
            .catch(err => console.log(err));
    }
}

module.exports = new PaymentMethodRepository;