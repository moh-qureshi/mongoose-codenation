const Movie = require("./model")

exports.addMovie = async (movieObj) =>{
    try {
        const response = await Movie.create(movieObj);
        console.log(response);
    } catch (error) {
        console.log(error)
    }
};

exports.findMovie = async () =>{
    try {
        const response = await Movie.find();
        console.log(response)

    } catch (error) {
        console.log(error)
    }
}
exports.deleteMovie = async (movieObj) =>{
    try {
        const response = await Movie.deleteOne(movieObj);
        console.log(response)
        console.log(`${movieObj} has been deleted`)
    } catch (error) {
        console.log(error)
    }
}
exports.updateMovie = async (movieObj) =>{
    try {
        const response = await Movie.findOneAndUpdate(
           
            {title:movieObj.title},
            
            {$set: {
                title: movieObj.newTitle,
            }},
            {new:true});
            console.log(response);
    } catch (error) {
        console.log(error)
    }
}