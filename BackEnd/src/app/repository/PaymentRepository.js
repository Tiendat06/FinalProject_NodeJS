const Payment = require('../model/Payment');

class PaymentRepository {

    insertPayment = (paymentData) => {
        return Payment.insertMany(paymentData)
            .then(payments => payments)
            .catch(err => console.log(err));
    }

    checkPaymentOrderRelatedOrderId = (matchingOrderIds) => {
        return Payment.find({
            order_id: {$in: matchingOrderIds},
        })
            .then(payments => payments)
            .catch(err => console.log(err));
    }
}

module.exports = new PaymentRepository;