const addressRepository = require('../repository/AddressRepository');

class AddressService {

    getAddressesByUserId = async (req, res) => {
        const {user_id} = req.query;
        const addresses = await addressRepository.getAddressesByUserId(user_id);

        return res.status(200).json({
            status: true,
            data: addresses,
            msg: 'Load addresses successfully !'
        })
    }

    updateUserAddress = async (req, res) => {
        const {id} = req.params;
        const {fullName, user_id, address, phone_number, is_default} = req.body;
        const error = req.flash('error');
        console.log({id, body: req.body});

        const addressUpdateData = {
            _id: id,
            fullName, address, phone_number, is_default: is_default === 'true'
        }

        try {
            if(error.length !== 0) throw new Error(error[0]);
            if(is_default === 'true'){
                const defaultUpdate = await addressRepository.updateAddressesRemoveDefaultByUserId(user_id);
                if (!defaultUpdate.acknowledged) throw new Error('Add address failed !');
            }
            const addressUpdate = await addressRepository.updateAddressById(addressUpdateData);
            if(!addressUpdate.acknowledged) throw new Error('Update address failed !');
            return res.status(200).json({
                status: true,
                msg: 'Update address successfully !'
            })
        } catch (e) {
            return res.status(400).json({
                status: false,
                msg: e.message
            })
        }

    }

    addUserAddressService = async (req, res) => {
        let {user_id, fullName, address, phone_number, is_default} = req.body;
        const error = req.flash('error');
        console.log({body: req.body});

        // if(typeof is_default == "boolean") console.log('is default is boolean: true');
        // else is_default = is_default === 'true';
        // console.log(is_default);
        try {
            if(error.length !== 0) throw new Error(error[0]);
            if(is_default === 'true'){
                const defaultUpdate = await addressRepository.updateAddressesRemoveDefaultByUserId(user_id);
                if (!defaultUpdate.acknowledged) throw new Error('Add address failed !');
            }
            const addressData = {
                user_id, fullName, address, phone_number, is_default: is_default === 'true'
            }
            const addressAddData = await addressRepository.insertAddress(addressData);
            if(addressAddData.length === 0) throw new Error('Add address failed !');

            return res.status(200).json({
                status: true,
                data: addressAddData[0],
                msg: 'Add address successfully !'
            })
        } catch (e) {
            return res.status(400).json({
                status: false,
                msg: e.message
            })
        }
    }

    deleteUserAddressService = async (req, res) => {
        let {id} = req.params;
        let error = req.flash('error');
        try {
            const address = await addressRepository.getAddressById(id);
            if(!address) throw new Error('Address is not exists !');
            console.log(address);
            if(address.is_default) throw new Error('You cannot delete default address !');

            if(error.length !== 0) throw new Error(error[0]);
            const deleteUserAddress = await addressRepository.deleteAddressById(id);
            if(!deleteUserAddress.acknowledged) throw new Error('Delete address failed !');

            return res.status(200).json({
                status: true,
                msg: 'Delete address successfully !'
            })

        } catch (e) {
            return res.status(400).json({
                status: false,
                msg: e.message
            })
        }
    }
}

module.exports = new AddressService;