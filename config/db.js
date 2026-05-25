const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        const mongoURI = process.env.MONGO_URI;
        const conn = await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB!");
    }catch(err){
        // console.error(err.message);
        throw err;
    }
}
module.exports = connectDB;