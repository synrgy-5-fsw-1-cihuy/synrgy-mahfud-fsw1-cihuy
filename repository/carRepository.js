const models = require('../models');
const Car = models.Car;

const findAllCar = async () => {
    return await Car.findAll();
};

const findCarById = async (id) => {
    return await Car.findByPk(id);
};

const saveCar = async (car) => {
    return await Car.create(car);
};

const destroyCar = async (carId) => {
    await Car.destroy({
        where: {id: carId}
    });
};

module.exports = {findAllCar, findCarById, saveCar, destroyCar};