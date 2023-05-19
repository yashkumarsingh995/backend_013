const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// Book a slot for a given date
router.post('/', bookingController.bookSlot);

// Get all bookings for a given slot
router.get('/:slotId', bookingController.getBookingsForSlot);

module.exports = router;
