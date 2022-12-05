const formidableMiddleware = require('formidable');
const carService = require("../service/carService.js");
const jwtTokenUtil = require('../util/jwtUtil.js');

const getAllCars = async (req, res) => {
    const cars = await carService.getAllCars();

    res.status(200).json({ data: cars });
}

const getSingleCar = async (req, res) => {
    const carById = await carService.getCarById(req.params.id, response);

  if (carById == null) {
    res
      .status(404)
      .json({ message: `Car not found with ids ${req.params.id}` });
    return;
  }
}

const addCar = async (req, res) => {
    const form = formidableMiddleware({});

  form.parse(request, async (err, fields, files) => {
    try {
      const authHeader = req.headers["authorization"];
      const token = authHeader && authHeader.split(' ')[1];
  
      const decodedToken = await jwtTokenUtil.checkTokenJwt(token);
      const carSaved = await carService.saveCar(fields, decodedToken);
  
      return res.status(201).json({
          message: "Car successfully created", 
          body: carSaved
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
          message: "Internal Server Error",
          data: null
      })
    }

  });
}

const updateCar = async (req, res) => {
    const id = req.params.id;
    const form = formidableMiddleware({ });

    await form.parse(request, async (err, fields, files) => {
        if (err) {
            next(err);
            return;
        };

        try {
            let updatedCar = await carService.updateCar(fields, id);
            let response = updatedCar;
            delete response.code;

            return res.status(updatedCar.code).json(response);
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message: "Internal Server Error",
                data: null
            })
        }

    });
}

const deleteCar = async(req, res) => {
    const id = req.params.id;
    
    try {
        let deletedCar = await carService.deleteCar(id);
        let response = deletedCar;
        delete response.code;

        return res.status(deletedCar.code).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error",
            data: null
        })
    }
}

module.exports = {
    getAllCars, 
    getSingleCar,
    addCar,
    updateCar, 
    deleteCar
}