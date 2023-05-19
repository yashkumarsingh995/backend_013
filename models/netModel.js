const mongoose = require('mongoose');

const netSchema = mongoose.Schema({

    venue_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Venue',
        required:true,
    },
    net_number:{
        type:Number,
        required:true,
    },
    is_available: {
        type:Boolean,
        default:true,
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

const Net = mongoose.model("Nets",netSchema);
module.exports = Net;
