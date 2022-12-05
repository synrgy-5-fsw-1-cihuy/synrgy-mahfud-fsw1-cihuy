const carRepository = require('../repository/car.repository.js');


const doGetAllCars = async () => {
    return await carRepository.findAllCar();
};

const doGetCarById = async (id) => {
    return await carRepository.findCarById(id);
};

const doSaveCar = async (car) => {
    return await carRepository.saveCar(car);
};;

const doDeleteCar = async (carId) => {
    await carRepository.destroyCar(carId);
};

module.exports = {doGetAllCars, doGetCarById, doSaveCar, doDeleteCar};