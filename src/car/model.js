const mongoose = require("mongoose")

const carSchema = new mongoose.Schema({
    manufacturer: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        unique: true,
    },
    year: {
        type: Number,
        default: "Not Specified",
    },

});

const Car = mongoose.model("Car", carSchema);

module.exports = Car;