const Address = require('../model/Address');

class AddressRepository {

    insertAddress = (addressJson) => {
        return Address.insertMany(addressJson)
            .then(value => {
                return value;
            })
            .catch(err => console.log(err));
    }
}

module.exports = new AddressRepository;