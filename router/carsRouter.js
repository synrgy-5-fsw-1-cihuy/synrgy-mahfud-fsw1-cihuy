const {
    getAllCars,
    getSingleCar,
    addCar,
    updateCar,
    deleteCar,
} = require("../controller/carsController")
const express = require('express');
const router = express.Router();

router.get("/cars", getAllCars);
router.get("/car/:id", getSingleCar);
router.post("/car", addCar);
router.put("/car/:id", updateCar);
router.delete("/car/:id", deleteCar);

module.exports = router;