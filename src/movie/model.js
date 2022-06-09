const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    actor: {
        type: String,
        default: "Not specified"
    },
    released: {
        type: String,
        unique: false, 
        default: "0000",
    },

});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;