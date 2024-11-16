const Role = require('../model/Role');

class RoleRepository {

    getRoleByRoleName = (role_name) => {
        return Role.findOne({role_name})
            .then((role) => {
                return role;
            })
            .catch(err => console.log(err));
    }
}

module.exports = new RoleRepository;