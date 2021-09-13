const express = require('express');
const asyncHandler = require('express-async-handler');

const { Booking, Plane } = require('../../db/models')

const router = express.Router();

// Create a new booking
router.post('/', asyncHandler(async function (req, res) {
    const booking = await Booking.create(req.body);
    return res.json(booking);

}))

router.get('/byPlane/:id', asyncHandler(async function (req, res) {
    const {id} = req.params;

    const bookings = await Booking.findAll({
        where: {
            planeId: id
        }
    })

    return res.json(bookings);
}))


router.get('/:id', asyncHandler(async function (req, res) {
    const {id} = req.params;

    const bookings = await Booking.findAll({
        where: {
            userId: id
        },
        include: Plane
    })

    return res.json(bookings);
}))


router.get('/', asyncHandler(async function (req, res) {
    const bookings = await Booking.findAll()

    return res.json(bookings);
}))






module.exports = router;