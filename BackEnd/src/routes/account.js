const express = require('express');
const router = express.Router();
const accountController = require('../app/controllers/AccountController');
const accountMiddleWare = require('../app/middlewares/AccountMiddleWare');
const accountValidator = require('../app/validators/AccountValidator');

router.get('/', accountController.get_accounts);

router.put('/:id', accountValidator.updateAccountBanningValidator,
    accountMiddleWare.update_account_banning, accountController.update_account_banning);

router.put('/change-role/:id', accountValidator.updateAccountRoleValidator,
    accountMiddleWare.update_account_role, accountController.update_account_role);

module.exports = router;