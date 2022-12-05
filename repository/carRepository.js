const { where } = require('sequelize');
const models = require('../models');
const Car = models.car;

const findAllCar = async () => {
    return await Car.findAll();
};

const findCarById = async (id) => {
    return await Car.findByPk(id);
};

const saveCar = async (car) => {
    return await Car.create(car);
};

const updateCar = async (car, carId) => {
    return await Car.update(car, {wher:{id: carId}})
}

const destroyCar = async (carId) => {
    await Car.destroy({
        where: {id: carId}
    });
};

module.exports = {findAllCar, findCarById, saveCar, updateCar, destroyCar};