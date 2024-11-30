const Address = require('../model/Address');

class AddressRepository {

    insertAddress = (addressJson) => {
        return Address.insertMany(addressJson)
            .then(value => value)
            .catch(err => console.log(err));
    }

    getAddressById = (_id) => {
        return Address.findOne({_id})
            .then(address => address)
            .catch(err => console.log(err));
    }

    getAddressesByUserId = (user_id) => {
        return Address.find({user_id})
            .sort({ is_default: -1 })
            .then(addresses => addresses)
            .catch(err => console.log(err));
    }

    updateAddressById = ({_id, ...updateData}) => {
        // console.log(_id, updateData);
        return Address.updateOne({_id}, {$set: updateData})
            .then(value => value)
            .catch(err => console.log(err));
    }

    deleteAddressById = (_id) => {
        return Address.deleteOne({_id})
            .then(value => value)
            .catch(err => console.log(err));
    }

    updateAddressesRemoveDefaultByUserId = (user_id) => {
        return Address.updateMany({user_id}, {$set: {is_default: false}})
            .then(value => value)
            .catch(err => console.log(err));
    }

}

module.exports = new AddressRepository;