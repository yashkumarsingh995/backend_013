const mongoose = require('mongoose');

const paymentSchema = mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    slot_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Slot',
    },
    payment_amount:{
        type:Number,
        required:true,
    },
    payment_status:{
        type:String,
        required:true,
    },
    payment_date:{
        type:Date
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


paymentSchema.index();

const Payment = mongoose.model("Payment",paymentSchema);


module.exports = Payment;