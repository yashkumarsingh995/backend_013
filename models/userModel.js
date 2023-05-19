const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username :{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    phone:{
        type:String,
        required:true,
    },
    is_member:
    {
        type:Boolean,
        required:true,
        default:false,
    },
    membership_exp_date:{
        type:Date,
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


userSchema.index();

const User = mongoose.model("User",userSchema);


module.exports = User;