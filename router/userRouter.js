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
 *                  - name
 *                  - email
 *                  - password
 *                  - role
 *              properties:
 *                  id:
 *                      type: integer
 *                      description: Auto-generated id of the car
 *                  name:
 *                      type: string
 *                      description: The name of the car
 *                  email:
 *                      type: string
 *                      description: The price of the car
 *                  password:
 *                      type: string
 *                      description: The size of the car
 *                  role:
 *                      type: string
 *                      description: The photo url of the car
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
 *                  - name
 *                  - email
 *                  - password
 *              properties:
 *                  name:
 *                      type: string
 *                      description: The name of the car
 *                  email:
 *                      type: string
 *                      description: The price of the car
 *                  password:
 *                      type: string
 *                      description: The size of the car
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
 *                      description: The price of the car
 *                  password:
 *                      type: string
 *                      description: The size of the car
 */ 

// Register Member
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