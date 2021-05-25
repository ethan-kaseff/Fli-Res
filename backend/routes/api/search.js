const express = require('express');
const asyncHandler = require('express-async-handler');

const { Plane, Booking } = require('../../db/models')

const router = express.Router();

// Search by list
router.get('/', asyncHandler(async function (req, res) {
    const {startDate, endDate} = req.body;

    

}))




// Retrieve Plane by Id
router.get('/:id', asyncHandler(async function (req, res) {
    const plane = await Plane.findByPk(req.params.id);
    return res.json(plane);
}));

router.get('/', asyncHandler(async function (req, res) {
    const plane = await Plane.findAll();
    return res.json(plane);
}));








module.exports = router;