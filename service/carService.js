const carRepository = require('../repository/carRepository.js');


const getAllCars = async () => {
    return await carRepository.findAllCar();
};

const getCarById = async (id) => {
    return await carRepository.findCarById(id);
};

const saveCar = async (car, creator) => {
    const carData = {
        ...car,
        createdBy: creator.email
      };
    return await carRepository.saveCar(carData);
};;

const updateCar = async (car, carId) => {
    let cekCarById = await carRepository.findCarById(carId);

    if (cekCarById == null) {
        return {
            code: 404,
            message: "Car Not Found",
            data: null
        };
    } else {
        await carRepository.updateCar()
        
        return {
            code: 200,
            message: "Success Updated Car",
            data: cekCarById
        }
    }

}

const deleteCar = async (carId) => {
    let cekCarById = await carRepository.findCarById(carId);

    if (cekCarById == null) {
        return {
            code: 404,
            message: "Car Not Found",
            data: null
        };
    } else {
        await carRepository.destroyCar(carId)
        
        return {
            code: 200,
            message: "Success Delete Car",
            data: cekCarById
        }
    }
};

module.exports = {getAllCars, getCarById, saveCar, updateCar, deleteCar};