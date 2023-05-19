const Booking = require('../models/BookingModel');

// Book a slot for a given date
exports.bookSlot = async (req, res, next) => {
  try {
    const { slot_id, date,booked_by_user_id,booking_type} = req.body;

    // Check if the slot is available for the given date
    const existingBooking = await Booking.findOne({ slot_id: slot_id, date: date });
    if (existingBooking) {
      return res.status(400).send({ message: 'This slot is already booked for the selected date.' });
    }

    // Create a new booking
    const booking = new Booking({
      slot_id: slot_id,
      date: date,
      is_booked: true,
      booked_by_user_id: booked_by_user_id, // Assuming that the user is authenticated and we have the user ID in the request object
      booking_type: booking_type, // Optional field for additional information about the booking
    });
    const savedBooking = await booking.save();
    res.send(savedBooking);
  } catch (error) {
    next(error);
  }
};

// Get all bookings for a given slot
exports.getBookingsForSlot = async (req, res, next) => {
  try {
    const { slot_id } = req.params;
    const bookings = await Booking.find({ slot_id: slot_id });
    res.send(bookings);
  } catch (error) {
    next(error);
  }
};
