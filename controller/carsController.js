const formidableMiddleware = require('formidable');
const carService = require("../service/carService.js");
const jwtTokenUtil = require('../util/jwtUtil.js');

const getAllCars = async (req, res) => {
    const cars = await carService.doGetAllCars();

    response.status(200).json({ data: cars });
}

const getSingleCar = async (req, res) => {
    const carById = await carService.doGetCarById(request.params.id, response);

  if (carById == null) {
    response
      .status(404)
      .json({ message: `Car not found with ids ${request.params.id}` });
    return;
  }
}

const addCar = async (req, res) => {
    const form = formidableMiddleware({});

  form.parse(request, async (err, fields, files) => {
    if (err) {
      next(err);

      return;
    }

    const authHeader = request.headers["authorization"];
    const token = authHeader && authHeader.split(' ')[1];

    const decodedToken = await jwtTokenUtil.checkTokenJwt(token);

    const carPayload = {
      name: fields.name,
      price: fields.price,
      size: fields.size,
      iamgeUrl : '-',
      createdBy: decodedToken.email
    };

    const carSaved = await carService.doSaveCar(carPayload);

    return response.status(201).json({
        message: "Car successfully created", 
        body: carSaved
    });
  });
}

// const updateCar = async (req, res) => {
//     const id = request.params.id;
//     const form = formidableMiddleware({ });

//     form.parse(request, (err, fields, files) => {
//         if (err) {
//             next(err);
//             return;
//         };

//         Car.findByPk(id).then(result => {
//             if(result == null) {
//                 res.status(404).json({message: "data not found",data: null});
//                 return;
//             }

//             Car.update(fields, {where: {id: id}}).then(result => {
//                 res.status(200).json({message: "success updated data",data: result});
//             }).catch(err => {
//                 console.error(err);
//                 res.status(500).json({message: "server error",data: null});
//                 throw err;
//             });
            
//         }).catch(err => {
//             console.error(err);
//             res.status(500).json({message: "server error",data: null});
//             throw err;
//         });

//     });
// }

const deleteCar = async(req, res) => {
    const carById = await carService.doGetCarById(request.params.id);

  if (carById == null) {
    return response.status(404).json({error: "Car not found"});
  };

  await carService.doDeleteCar(carById.id);

  return response.status(204).json({data: ""});
}

module.exports = {
    getAllCars, 
    getSingleCar,
    addCar,
    updateCar, 
    deleteCar
}