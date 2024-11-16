const User = require('../model/User');

class UserRepository {

    insertUserRegister = (userJson) => {
        return User.insertMany(userJson)
            .then(value => {
                return value;
            })
            .catch(err => console.log(err));
    }

    getUserByPhone = (phone) => {
        return User.findOne({phone})
            .then(value => {
                return value;
            })
            .catch(err => console.log(err));
    }

    getUserByEmail = (email) => {
        return User.findOne({email})
            .then(value => {
                return value;
            })
            .catch(err => console.log(err));
    }
}

module.exports = new UserRepository;