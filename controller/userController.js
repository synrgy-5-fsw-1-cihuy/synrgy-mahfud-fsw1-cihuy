const formidableMiddleware = require('formidable');
const userService = require('../service/userService.js')

const doRegisterUserHandler = async (request, response) => {
    const form = formidableMiddleware({ });

    form.parse(request, async (err, fields, files) => {
        try {
            let registerUser = await userService.saveUser(fields.email, fields.password, fields.role);

            return response.status(registerUser.code).json(registerUser);
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

            const loginUser = await userService.loginUser(email, password);

            return response.status(loginUser.code).json(loginUser);
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
        if (token == undefined) {
            return response.status(403).json({
                message: 'Need User Token',
                data: null
            });    
        }

        let userProfile = await userService.getUserProfile(token);

        return response.status(userProfile.code).json(userProfile);
    } catch (error) {
        console.log(error);
        return response.status(500).json({message: "Internal Server Error", data: null});
    }

};

module.exports = { doRegisterUserHandler, doLoginHandler, doGetProfileHandler };