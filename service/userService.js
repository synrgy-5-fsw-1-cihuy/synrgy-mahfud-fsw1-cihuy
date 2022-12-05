const userRepository = require('../repository/userRepository');
const bcrypt = require('bcrypt');
const jwtTokenUtil = require('../util/jwtUtil.js');
const saltRounds = 10;

const saveUser = async (email, password, role) => {
    if (role != 'MEMBER' || role != 'ADMIN') {
        return {
            code: 400,
            message: 'Role False, Choose ADMIN or MEMBER',
            data: null
        }
    }

    let hashedPassword = await bcrypt.hash(fields.password, saltRounds);
    let user = {
        email: email,
        password: hashedPassword,
        role: role
    }

    user = await userRepository.registerUser(user);
    return {
        code: 200,
        message: "Registered Successfully",
        data: {...user}
    }    
}

const getUserDetailByEmail = async (email) => {
    const userByEmail = await userRepository.getUserByEmail(email);

    if (userByEmail == null) {
        return {
            code: 404,
            message: 'User Account Not Found, Please Register',
            data: null
        }
    } else {
        return {
            code: 200,
            message: 'User Account Found',
            data: {...userByEmail}
        }
    }
}

const getUserDetailById = async (userId) => {
    const userById = await userRepository.getUserById(userId);

    if (userByEmail == null) {
        return {
            code: 404,
            message: 'User Account Not Found',
            data: null
        }
    } else {
        return {
            code: 200,
            message: 'User Account Found',
            data: {...userById}
        }
    }
}

const getUserProfile = async (token) => {
    const decodedToken = await jwtTokenUtil.checkTokenJwt(token);
    let userDetail = await getUserDetailById(decodedToken.id);

    if (userDetail = null) {
        return {
            code: 404,
            message: 'User Not Found',
            data: null
        }
    } else {
        return {
            code: 200,
            message: 'User Found',
            data: {...userDetail.data}
        }
    }
}

const loginUser = async (email, password) => {
    const userByEmail = await getUserDetailByEmail(email);

    const checkAccountPassword = await bcrypt.compare(fields.password, userByEmail.password);

    if (checkAccountPassword == false) { 
        return {
            code: 403,
            message: 'Authentication Failed, Wrong Password',
            data: null
        }
    }

    const tokenGenerated = jwtTokenUtil.encodeTokenJwt({
        ...userByEmail.data
    });

    return {
        code: 200,
        message: 'Login Successfully',
        data: {
            token: tokenGenerated
        }
    }
}

module.exports = {saveUser, getUserDetailByEmail, getUserDetailById, loginUser, getUserProfile};