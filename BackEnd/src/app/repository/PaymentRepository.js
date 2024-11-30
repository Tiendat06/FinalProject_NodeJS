const Payment = require('../model/Payment');

class PaymentRepository {

    insertPayment = (paymentData) => {
        return Payment.insertMany(paymentData)
            .then(payments => payments)
            .catch(err => console.log(err));
    }
}

module.exports = new PaymentRepository;