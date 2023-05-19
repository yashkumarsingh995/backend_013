const mongoose = require('mongoose');

const venueSchema = mongoose.Schema({
    name :{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    state:{
        type:String,
        required:true,
    },
    country:
    {
        type:String,
        required:true,
    },
    pincode:{
        type:String,

    },
    created_at:{
        type:Date,
    },
    updated_at:{
        type:Date,
    }
},
{
    timestamps:true,
})


venueSchema.index();

const Venue = mongoose.model("Venue",venueSchema);


module.exports = Venue;