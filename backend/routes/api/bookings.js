const express = require('express');
const asyncHandler = require('express-async-handler');

const { Booking, Plane } = require('../../db/models')

const router = express.Router();

// Get all bookings
router.get('/', asyncHandler(async function (req, res) {
    const bookings = await Booking.findAll()

    return res.json(bookings);
}))

// Get bookings by User Id and include plane info
router.get('/:id', asyncHandler(async function (req, res) {
    const { id } = req.params;

    const bookings = await Booking.findAll({
        where: {
            userId: id
        },
        include: Plane
    })

    return res.json(bookings);
}))

// Get bookings by planeId 
router.get('/byPlane/:id', asyncHandler(async function (req, res) {
    const {id} = req.params;

    const bookings = await Booking.findAll({
        where: {
            planeId: id
        }
    })

    return res.json(bookings);
}))

// Create a new booking
router.post('/', asyncHandler(async function (req, res) {
    const booking = await Booking.create(req.body);
    return res.json(booking);

}))

// Delete Booking
router.post('/delete/:bookingId', asyncHandler( async (req, res) => {
    const { bookingId } = req.params;

    const booking = await Booking.findByPk(bookingId)

    if (booking) {
        await booking.destroy()
        res.end()
        return booking
    }

}))

// Edit a booking 
router.patch('/edit', asyncHandler(async (req, res) => {
    const { id, startDate, endDate } = req.body;

    // const booking = await Booking.findOne({
    //     where: {
    //         id: id
    //     },
    //     include: Plane
    // })

    const booking = await Booking.findByPk(id)

    booking.startDate = startDate;
    booking.endDate = endDate;

    await booking.save();

    console.log('change was saved')

    res.end()

    console.log(booking)

    return booking;
}))




module.exports = router;