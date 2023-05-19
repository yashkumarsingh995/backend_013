const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    phone_number:{
        type:Number,
        required:true
    },
    is_counter_admin:{
        type:Boolean,
        required:true
    },
    venue_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Venue'
    },
    created_at:{
        type:Date,
    },
    updated_at:{
        type:Date,
    }

})

adminSchema.index();

const Admin = mongoose.model("Admin",adminSchema);


module.exports = Admin;