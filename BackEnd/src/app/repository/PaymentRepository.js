const Payment = require('../model/Payment');

class PaymentRepository {
    getAllPayments = () => {
        return Payment.find()
            .then(payments => {
                return payments; // Return payments
            })
            .catch(err => {
                console.error('Error fetching payments:', err); // Log error more clearly
                throw new Error('Failed to fetch payments'); // Optionally, throw an error for better handling in calling code
            });
    };


    insertPayment = (paymentData) => {
        return Payment.insertMany(paymentData)
            .then(payments => payments)
            .catch(err => console.log(err));
    }
}

module.exports = new PaymentRepository;