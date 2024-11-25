const addressService = require('../services/AddressService');

class AddressController {

    index = async (req, res, next) => {
        return await addressService.getAddressesByUserId(req, res);
    }

    update_user_address = async (req, res, next) => {
        return await addressService.updateUserAddress(req, res);
    }

    add_user_address = async (req, res, next) => {
        // console.log('hi world')
        return await addressService.addUserAddressService(req, res);
    }

    delete_user_address = async (req, res, next) => {
        return await addressService.deleteUserAddressService(req, res);
    }
}

module.exports = new AddressController;