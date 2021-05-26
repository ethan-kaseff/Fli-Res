const express = require('express');
const asyncHandler = require('express-async-handler');

const { check } = require('express-validator');

const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const { Booking, Plane } = require('../../db/models')

const router = express.Router();

// Retrieve Plane by Id
router.get('/:id', asyncHandler(async function (req, res) {
    const plane = await Plane.findByPk(req.params.id);
    return res.json(plane);
}));

router.get('/', asyncHandler(async function (req, res) {
    const planes = await Plane.findAll();
    return res.json(planes);
}));

router.get('/available/:startDate/:endDate', asyncHandler( async function (req, res) {
    const {startDate, endDate } = req.params;

    const startDateFormatted = new Date(startDate);
    const endDateFormatted = new Date(endDate)

    const relevantBookings = await Booking.findAll({
        where: {
            [Op.and]: {
                startDate: {
                    [Op.lte]: endDateFormatted,
                },
                endDate: {
                    [Op.gte]: startDateFormatted,
                }
            }
        }
    })
    
    const bookedPlaneIdsSet = new Set();

    for (booking of relevantBookings) {
        bookedPlaneIdsSet.add(booking.planeId)
    }

    const availablePlanes = await Plane.findAll({
        where: {
            id: {
                [Op.notIn]: [...bookedPlaneIdsSet]

            }
        }
    })

    return res.json(availablePlanes);

}))


// [Op.or]: {
//     [Op.between]: [startDate, endDate]
// }

// [Op.or]: {
//     [Op.between]: [startDate, endDate]

// }








module.exports = router;