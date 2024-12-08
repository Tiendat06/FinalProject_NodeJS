const User = require('../model/User');

class UserRepository {

    getAllUsers = () => {
        return User.find({ deleted: false })
            .then(users => users)
            .catch(err => console.log(err))
    }

    insertUserRegister = (userJson) => {
        return User.insertMany(userJson)
            .then(value => {
                return value;
            })
            .catch(err => console.log(err));
    }

    getUserById = (_id) => {
        return User.findOne({ _id, deleted: false })
            .then(user => user)
            .catch(err => console.log(err));
    }

    getUserByPhone = (phone) => {
        return User.findOne({ phone, deleted: false })
            .then(value => {
                return value;
            })
            .catch(err => console.log(err));
    }

    getUserByEmail = (email) => {
        return User.findOne({ email, deleted: false })
            .then(value => {
                return value;
            })
            .catch(err => console.log(err));
    }

    getUserByPhoneAndEmail = (phone, email) => {
        return User.findOne({ phone, email, deleted: false })
            .then(user => user)
            .catch(err => console.log(err));
    }

    updateUserById = ({ _id, ...userUpdate }) => {
        return User.updateOne({ _id, deleted: false }, { $set: userUpdate })
            .then(value => value)
            .catch(err => console.log(err));
    }

    hardDeleteById = (_id) => {
        return User.deleteOne({ _id, deleted: false })
            .then(value => value)
            .catch(err => console.log(err));
    }

    getTotalUser = async () => {
        try {
            const value = await User.countDocuments();
            console.log('Total Users:', value); // Debug log
            return value;
        } catch (err) {
            console.error('Error counting users:', err);
            return 0;
        }
    }

    getUserWithLimitDocument = (limit) => {
        return User.find()
            .limit(limit)
            .sort({_id: -1})
            .then(users => users)
            .catch(err => console.log(err));
    }
}

module.exports = new UserRepository;