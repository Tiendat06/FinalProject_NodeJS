const accountRepository = require('../repository/AccountRepository');

class AccountService {

    getAllAccounts = async (req, res) => {
        try {
            const accounts = await accountRepository.getAllAccounts();
            return res.status(200).json({
                status: true,
                data: accounts,
                msg: 'Load account successfully !'
            });
        } catch (e) {
            return res.status(400).json({
                status: false,
                msg: e.message,
            })
        }
    }

    updateAccountBanning = async (req, res) => {
        const {id} = req.params;
        const {is_ban} = req.body;
        const error = req.flash('error');
        try {
            if(error.length > 0) throw new Error(error[0]);

            const account = await accountRepository.getAccountById(id);
            if(!account) throw new Error('Account not found !');

            const accountData = {
                _id: id,
                is_ban,
            }
            const updatedAccount = await accountRepository.updateAccountById(accountData);
            if(!updatedAccount.acknowledged) throw new Error('Update banning failed !');
            const accountUpdatedData = await accountRepository.getAccountById(id);

            return res.status(200).json({
                status: true,
                data: accountUpdatedData,
                msg: 'Updated account successfully !'
            })

        } catch (e) {
            return res.status(400).json({
                status: false,
                msg: e.message,
            })
        }
    }
}

module.exports = new AccountService;