const formidableMiddleware = require('formidable');
const bcrypt = require('bcrypt');
const jwtTokenUtil = require('../util/jwtUtil.js');
const userService = require('../service/userService.js')
const saltRounds = 10;


const doRegisterUserHandler = async (request, response) => {
    const form = formidableMiddleware({ });

    form.parse(request, async (err, fields, files) => {
        if (err) {
            next(err);
            
            return;
        };

        try {
            // Process hashing plain password
            const hashedPassword = await bcrypt.hash(fields.password, saltRounds);
            let user = {};

            if (fields.role == "SUPERADMIN") {
                // do create admin user
                user = {
                    email: fields.email,
                    password: hashedPassword,
                    role: "ADMIN"
                };

                user = await userService.saveUser(user);
            } else if (fields.role == "MEMBER") {
                user = {
                    email: fields.email,
                    password: hashedPassword,
                    role: "MEMBER"
                }

                user = await userService.saveUser(user);
            } else {
                response.status(400).json({
                    message: "Role False, choose MEMBER OR SUPERADMIN", 
                    data: {
                        id: user.id,
                        email: user.email,
                        role: user.role
                    }
                });
            }   

            response.status(201).json({
                message: "Registered Successfully", 
                data: {
                    id: user.id,
                    email: user.email,
                    role: user.role

                }
            });
            return;
        } catch(err) {
            response.status(500).json({message: "Internal Server Error", data: null});

            throw err;
        }

    });
};


const doLoginHandler = async (request, response) => {
    const form = formidableMiddleware({ });

    form.parse(request, async (err, fields, files) => {
        if (err) {
            next(err);
            
            return;
        };

        try {
            const email = fields.email;

            const userByEmail = await userService.getUserDetailByEmail;

            if (userByEmail == null) {
                response.status(401).json({
                    error: "User account not found. Please register first"
                });
                return;
            };

            const checkAccountPassword = await bcrypt.compare(fields.password, userByEmail.password);

            if (checkAccountPassword == false) {
                response.status(401).json({error: "Email or password incorrect. Please check your spelling"});
                return;
            };

            const tokenGenerated = jwtTokenUtil.encodeTokenJwt({
                id: userByEmail.id,
                email: userByEmail.email,
                role: userByEmail.role
            });

            response.status(200).json({
                message: "Logged successfully",
                token: tokenGenerated
            });

            return;
        } catch(err) {
            response.status(422).json({error: "Error logged user"});
            throw err;
        };

    });
};

const doGetProfileHandler = async (request, response) => {
    const authHeader = request.headers["authorization"];
    const token = authHeader && authHeader.split(' ')[1];

    const decodedToken = await jwtTokenUtil.checkTokenJwt(token);

    const userFindById = await userService.getUserDetailById(decodedToken.id);

    if (userFindById == null) {
        return response.status(404).json({error: "User not found"});
    };

    response.status(200).json({
        data: {
            id: userFindById.id,
            email: userFindById.email,
            role: userFindById.role,
            createdAt: userFindById.createdAt,
            updatedAt: userFindById.updatedAt
        }
    });
};

module.exports = { doRegisterUserHandler, doLoginHandler, doGetProfileHandler };