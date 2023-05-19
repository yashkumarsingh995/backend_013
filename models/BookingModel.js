const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  slot_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Slot',
    
  },
  date: {
    type: Date,
  },
  is_booked: {
    type: Boolean,
  },
  booked_by_user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    
  },
  booking_type: {
    type: String,
  },
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
