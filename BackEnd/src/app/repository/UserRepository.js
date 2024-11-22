const User = require('../model/User');

class UserRepository {

    insertUserRegister = (userJson) => {
        return User.insertMany(userJson)
            .then(value => {
                return value;
            })
            .catch(err => console.log(err));
    }

    getUserById = (_id) => {
        return User.findOne({_id, deleted: false})
            .then(user => user)
            .catch(err => console.log(err));
    }

    getUserByPhone = (phone) => {
        return User.findOne({phone, deleted: false})
            .then(value => {
                return value;
            })
            .catch(err => console.log(err));
    }

    getUserByEmail = (email) => {
        return User.findOne({email, deleted: false})
            .then(value => {
                return value;
            })
            .catch(err => console.log(err));
    }

    updateUserById = ({_id, ...userUpdate}) => {
        return User.updateOne({_id, deleted: false}, {$set: userUpdate})
            .then(value => value)
            .catch(err => console.log(err));
    }
}

module.exports = new UserRepository;