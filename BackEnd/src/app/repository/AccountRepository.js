const Account = require('../model/Account');

class AccountRepository {

    insertAccountRegister = (accountJson) => {
        return Account.insertMany(accountJson)
            .then(value => {
                return value;
            })
            .catch(err => console.log(err));
    }

    getAccountByUserId = (user_id) => {
        return Account.findOne({user_id})
            .then(value => {
                return value;
            })
            .catch(err => console.log(err));
    }
}

module.exports = new AccountRepository;