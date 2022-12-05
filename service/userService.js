const userRepository = require('../repository/userRepository');


const saveUser = async (user) => {
    return await userRepository.registerUser(user);
}

const getUserDetailByEmail = async (email) => {
    return await userRepository.getUserByEmail(email);
}

const getUserDetailById = async (userId) => {
    return await userRepository.getUserById(userId);
}

module.exports = {saveUser, getUserDetailByEmail, getUserDetailById};