const express = require("express");
const router = express.Router();
const userController = require("../controller/userController.js");

// COMPONENTS
/**
 * @swagger
 * components:
 *      schemas:
 *          User:
 *              type: object
 *              required:
 *                  - id
 *                  - email
 *                  - password
 *                  - role
 *              properties:
 *                  id:
 *                      type: integer
 *                      description: Auto-generated id of the user
 *                  email:
 *                      type: string
 *                      description: User Email
 *                  password:
 *                      type: string
 *                      description: User Password
 *                  role:
 *                      type: string
 *                      description: User Role
 *                  createdAt:
 *                      type: timestamp
 *                      description: The date the data was created
 *                  updatedAt:
 *                      type: timestamp
 *                      description: The date the data was updated
 */ 

/**
 * @swagger
 * components:
 *      schemas:
 *          UserRequest:
 *              type: object
 *              required:
 *                  - email
 *                  - password
 *              properties:
 *                  email:
 *                      type: string
 *                      description: Email User
 *                  password:
 *                      type: string
 *                      description: Password User
 */ 

/**
 * @swagger
 * components:
 *      schemas:
 *          LoginRequest:
 *              type: object
 *              required:
 *                  - email
 *                  - password
 *              properties:
 *                  email:
 *                      type: string
 *                      description: Email User
 *                  password:
 *                      type: string
 *                      description: Password User
 */ 

/**
 * @swagger
 * components:
 *      schemas:
 *          RegisterRequest:
 *              type: object
 *              required:
 *                  - email
 *                  - password
 *                  - role
 *              properties:
 *                  email:
 *                      type: string
 *                      description: User Email
 *                  password:
 *                      type: string
 *                      description: User Password
 *                  role:
 *                      type: string
 *                      description: User Role
 */ 

// Register Member
/**
 * @swagger
 * /register:
 *      post:
 *          summary: Register for user
 *          tags: [User]
 *          requestBody:
 *              description: Input for Register
 *              required: true
 *              content:
 *                  multipart/form-data:
 *                      schema:
 *                          $ref: '#/components/schemas/RegisterRequest'
 *          responses:
 *              "200":
 *                  description: Logged successfully
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/User'
 */ 
router.post("/api/register/", userController.doRegisterUserHandler);

// Login
/**
 * @swagger
 * /login:
 *      post:
 *          summary: Login for user
 *          tags: [User]
 *          requestBody:
 *              description: Input for login
 *              required: true
 *              content:
 *                  multipart/form-data:
 *                      schema:
 *                          $ref: '#/components/schemas/LoginRequest'
 *          responses:
 *              "200":
 *                  description: Logged successfully
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/User'
 */ 
router.post("/api/login", userController.doLoginHandler);

// Current User
/**
 * @swagger
 * /profile:
 *      post:
 *          summary: Check current user
 *          tags: [User]
 *          security:
 *              -   bearerAuth: []
 *          responses:
 *              "200":
 *                  description: Current User
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/User'
 */ 
router.post("/api/profile", userController.doGetProfileHandler);

module.exports = router;