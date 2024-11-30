const CashMethod = require('../behavioral/CashMethod');
const PaypalMethod = require('../behavioral/PaypalMethod');

class PaymentMethodFactory {

    createPaymentMethodFactory = (payment_method_name) => {
        if(payment_method_name === 'cash')
            return new CashMethod();
        else if (payment_method_name === 'paypal')
            return new PaypalMethod();
    }
}

module.exports = new PaymentMethodFactory;