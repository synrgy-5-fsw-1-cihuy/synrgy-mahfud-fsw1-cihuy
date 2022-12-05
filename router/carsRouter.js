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

router.get("/cars",authMiddleware, getAllCars);
router.get("/car/:id", authMiddleware, getSingleCar);
router.post("/car", authMiddleware, addCar);
router.put("/car/:id", authMiddleware, updateCar);
router.delete("/car/:id", authMiddleware, deleteCar);

module.exports = router;