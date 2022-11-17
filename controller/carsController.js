const formidableMiddleware = require('formidable');
const models = require('../models/index.js');
const Car = models.car;

const getAllCars = async (req, res) => {
    const form = formidableMiddleware({ });

    await Car.findAll().then(result => {
        res.status(200).json({message: "success", data: result});
    }).catch(err => {
        console.error(err);
        res.status(500).json({message: "server error",data: null});
    });
}

const getSingleCar = async (req, res) => {
    const id = req.params.id;

    await Car.findByPk(id).then(result => {
        if(result == null) {
            res.status(404).json({message: "data not found",data: {}});
            return;
        }
        res.status(200).json({data: result});
    }).catch(err => {
        console.error(err);
        res.status(500).json({message: "server error",data: null});
    });
}

const addCar = async (req, res) => {
    const form = formidableMiddleware({ });

    await form.parse(request, (err, fields, files) => {
        if (err) {
            next(err);
            return;
        };

        Car.create(fields).then(result => {
            res.status(201).json({
                message: "add car successfully",
                data: fields
            });
        }).catch(err => {
            console.log(err);
            res.status(500).json({message: "server error",data: null});
        });
    });
}

const updateCar = async (req, res) => {
    const id = request.params.id;
    const form = formidableMiddleware({ });

    form.parse(request, (err, fields, files) => {
        if (err) {
            next(err);
            return;
        };

        Car.findByPk(id).then(result => {
            if(result == null) {
                res.status(404).json({message: "data not found",data: null});
                return;
            }

            Car.update(fields, {where: {id: id}}).then(result => {
                res.status(200).json({message: "success updated data",data: result});
            }).catch(err => {
                console.error(err);
                res.status(500).json({message: "server error",data: null});
                throw err;
            });
            
        }).catch(err => {
            console.error(err);
            res.status(500).json({message: "server error",data: null});
            throw err;
        });

    });
}

const deleteCar = async(req, res) => {
    const id = req.params.id;

    Car.findByPk(id).then(result => {
        if(result == null) {
            res.status(404).json({message: "data nor found", data: {}});
            return;
        }

        Post.destroy({where: {id}}).then(result => {
            res.status(204).json({message: "succesfully deleted data", data: null});
        });
        
    }).catch(err => {
        console.error(err);
        res.status(500).json({message: "server error", data: null});
        throw err;
    });
}

module.exports = {
    getAllCars, 
    getSingleCar,
    addCar,
    updateCar, 
    deleteCar
};