require("dotenv").config();


const mongoose = require('mongoose');
mongoose.set('strictQuery',true,)
const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI,
            {
                useNewUrlParser:true,
                useUnifiedTopology:true,
            });
            
            console.log("MongoDB connection Success");
    }
    catch(error)
    {
        console.log(`Error:${error}`);
        process.exit(1);
    }
}


module.exports = connectDB;
