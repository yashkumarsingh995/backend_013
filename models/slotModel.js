const mongoose = require('mongoose');
 const slotSchema = mongoose.Schema({
  net_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Nets',
  },
  Slot_time: {
    type: Number,
    required: true,
  },
  rate: {
    type: Number,
    default: 0,
  },
  booked_by_user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  booking_type: {
    type: String,
  },
  created_at: {
    type: Date,
  },
  updated_at: {
    type: Date,
  },
  is_available: {
    type: Boolean,
    default: true,
  },
}, {
  timestamps: true,
});
 slotSchema.index();
 const Slot = mongoose.model('Slot', slotSchema);
 module.exports = Slot;