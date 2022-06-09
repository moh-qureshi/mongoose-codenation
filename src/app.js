require("./db/connection");
const yargs = require("yargs");
const mongoose = require("mongoose");
const { addMovie, findMovie, deleteMovie, updateMovie } = require("./movie/functions");
const Movie = require("./movie/model");

const app = async (yargsObj) => {
    if(yargsObj.add){
        //add car to database from yargs input
        await addMovie({title: yargsObj.title, actor: yargsObj.actor, released: yargsObj.released})
    } else if(yargsObj.list){
        //find cars
        await findMovie()
    } else if(yargsObj.update){
        //update cars
        await updateMovie({title: yargsObj.title, newTitle: yargsObj.newTitle})
    } else if(yargsObj.delete){
        //delete cars
        await deleteMovie(yargsObj)
    } else{
        console.log("Incorrect command")
    }
    mongoose.disconnect();
}; 

app(yargs.argv);