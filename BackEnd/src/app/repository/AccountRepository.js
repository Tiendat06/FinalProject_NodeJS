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
        return Account.findOne({user_id, is_ban: false, deleted: false})
            .then(value => {
                return value;
            })
            .catch(err => console.log(err));
    }

    updateAccountById = ({_id, ...accountData}) => {
        return Account.updateOne({_id}, {$set: accountData})
            .then(value => value)
            .catch(err => console.log(err));
    }
}

module.exports = new AccountRepository;