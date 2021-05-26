const express = require('express');
const asyncHandler = require('express-async-handler');

const { Booking } = require('../../db/models')

const router = express.Router();

// Create a new booking
router.post('/', asyncHandler(async function (req, res) {
    const booking = await Booking.create(req.body);
    return res.json(booking);

}))








module.exports = router;