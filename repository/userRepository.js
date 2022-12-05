const models = require('../models');
const User = models.user;

const registerUser = async(user) => {
    return await User.create(user);
}

const getUserById = async(userId) => {
    return await User.findByPk(userId);
}

const getUserByEmail = async(email) => {
    return await User.findOne({
        where: {
            email: email
        }
    })
}

module.exports = {registerUser, getUserById, getUserByEmail}