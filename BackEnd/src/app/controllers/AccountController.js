const accountService = require('../services/AccountService');

class AccountController {

    get_accounts = async (req, res, next) => {
        return await accountService.getAllAccounts(req, res);
    }

    update_account_banning = async (req, res, next) => {
        return await accountService.updateAccountBanning(req, res)
    }

    update_account_role = async (req, res, next) => {
        return await accountService.updateAccountRole(req, res);
    }
}

module.exports = new AccountController;