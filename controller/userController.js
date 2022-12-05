const formidableMiddleware = require('formidable');
const userService = require('../service/userService.js')

const doRegisterUserHandler = async (request, response) => {
    const form = formidableMiddleware({ });

    form.parse(request, async (err, fields, files) => {
        try {
            // Process hashing plain password
            let registerUser = await userService.saveUser(fields.email, fields.password, fields.role);
            let result = registerUser;
            delete result.code;

            return response.status(registerUser.code).json(result);
        } catch(error) {
            console.log(error);

            return response.status(500).json({message: "Internal Server Error", data: null});
        }

    });
};


const doLoginHandler = async (request, response) => {
    const form = formidableMiddleware({ });

    form.parse(request, async (err, fields, files) => {
        try {
            const email = fields.email;
            const password = fields.password;

            let loginUser = await userService.loginUser(email, password);
            let result = loginUser;
            delete result.code;

            return response.status(loginUser.code).json(result);
        } catch(error) {
            console.log(error);
            return response.status(500).json({message: "Internal Server Error", data: null});
        };

    });
};

const doGetProfileHandler = async (request, response) => {
    const authHeader = request.headers["authorization"];
    const token = authHeader && authHeader.split(' ')[1];

    try {
        let userProfile = await userService.getUserProfile(token);
        let result = userProfile;
        delete result.code;

        return response.status(userProfile.code).json(result);
    } catch (error) {
        console.log(error);
        return response.status(500).json({message: "Internal Server Error", data: null});
    }

};

module.exports = { doRegisterUserHandler, doLoginHandler, doGetProfileHandler };