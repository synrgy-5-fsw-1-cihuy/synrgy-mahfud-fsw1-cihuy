const {
    getAllCars,
    getSingleCar,
    addCar,
    updateCar,
    deleteCar,
} = require("../controller/carsController")
const express = require('express');
const authMiddleware = require('../middleware/authToken.js');
const router = express.Router();

// COMPONENTS
/**
 * @swagger
 * components:
 *      schemas:
 *          Car:
 *              type: object
 *              required:
 *                  - id
 *                  - name
 *                  - price
 *                  - size
 *                  - imageUrl
 *              properties:
 *                  id:
 *                      type: integer
 *                      description: Auto-generated id of the car
 *                  name:
 *                      type: string
 *                      description: The name of the car
 *                  price:
 *                      type: string
 *                      description: The price of the car
 *                  size:
 *                      type: string
 *                      description: The size of the car
 *                  imageUrl:
 *                      type: string
 *                      description: The iamge url of the car
 *                  createdAt:
 *                      type: timestamp
 *                      description: The date the data was created
 *                  updatedAt:
 *                      type: timestamp
 *                      description: The date the data was updated
 *                  createdBy:
 *                      type: string
 *                      description: The user who created the data
 */ 

/**
 * @swagger
 * components:
 *      schemas:
 *          CarRequest:
 *              type: object
 *              required:
 *                  - name
 *                  - price
 *                  - size
 *                  - photo
 *              properties:
 *                  name:
 *                      type: string
 *                      description: The name of the car
 *                  price:
 *                      type: string
 *                      description: The price of the car
 *                  size:
 *                      type: string
 *                      description: The size of the car
 *                  imageurl:
 *                      type: string
 *                      format: binary
 *                      description: The photo url of the car
 */ 

/** 
 * @swagger
 * components:
 *      securitySchemes:
 *          bearerAuth:
 *              type: http
 *              scheme: bearer
 *              bearerFormat: JWT
*/

// GET ALL
/**
 * @swagger
 * /cars:
 *      get:
 *          summary: Get all Car data
 *          tags: [Car]
 *          security:
 *              -   bearerAuth: []
 *          responses:
 *              "200":
 *                  description: Retrieve all cars
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Car'
 */ 
router.get("/cars",authMiddleware, getAllCars);

/**
 * @swagger
 * /cars/{id}:
 *      get:
 *          summary: Get Car data by id
 *          tags: [Car]
 *          security:
 *              -   bearerAuth: []
 *          parameters:
 *              -   in: path
 *                  name: id
 *                  schema:
 *                      type: integer
 *                  required: true
 *                  description: The car id
 *          responses:
 *              "200":
 *                  description: Retrieve car by id
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Car'
 */ 
router.get("/car/:id", authMiddleware, getSingleCar);

/**
 * @swagger
 * /cars:
 *      post:
 *          summary: Create new car data
 *          tags: [Car]
 *          security:
 *              -   bearerAuth: []
 *          requestBody:
 *              description: Input for new car
 *              required: true
 *              content:
 *                  multipart/form-data:
 *                      schema:
 *                          $ref: '#/components/schemas/CarRequest'
 *          responses:
 *              "201":
 *                  description: Car successfully created
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Car'
 */ 
router.post("/car", authMiddleware, addCar);

/**
 * @swagger
 * /cars/{id}:
 *      put:
 *          summary: Update car data
 *          tags: [Car]
 *          security:
 *              -   bearerAuth: []
 *          parameters:
 *              -   in: path
 *                  name: id
 *                  schema:
 *                      type: integer
 *                  required: true
 *                  description: The car id
 *          requestBody:
 *              description: Input for updating car
 *              required: true
 *              content:
 *                  multipart/form-data:
 *                      schema:
 *                          $ref: '#/components/schemas/CarRequest'
 *          responses:
 *              "201":
 *                  description: Car successfully updated
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Car'
 */ 
router.put("/car/:id", authMiddleware, updateCar);

/**
 * @swagger
 * /cars/{id}:
 *      delete:
 *          summary: Delete car data
 *          tags: [Car]
 *          security:
 *              -   bearerAuth: []
 *          parameters:
 *              -   in: path
 *                  name: id
 *                  schema:
 *                      type: integer
 *                  required: true
 *                  description: The car id
 *          responses:
 *              "204":
 *                  description: Car successfully deleted
 */ 
router.delete("/car/:id", authMiddleware, deleteCar);

module.exports = router;