const Car = require("./model")

exports.addCar = async (carObj) =>{
    try {
        const response = await Car.create(carObj);
        console.log(response);
    } catch (error) {
        console.log(error)
    }
};