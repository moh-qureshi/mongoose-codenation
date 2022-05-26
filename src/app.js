require("./db/connection");
const yargs = require("yargs");
const mongoose = require("mongoose");
const { addCar } = require("./car/functions");

const app = async (yargsObj) => {
    if(yargsObj.add){
        //add car to database from yargs input
        await addCar({manufacturer: yargsObj.manufacturer, model: yargsObj.model, year: yargsObj.year})
    } else if(yargsObj.list){
        //find cars
    } else if(yargsObj.update){
        //update cars
    } else if(yargsObj.delete){
        //delete cars
    } else{
        console.log("Incorrect command")
    }
    mongoose.disconnect();
}; 

app(yargs.argv);