const express = require('express');
const asyncHandler = require('express-async-handler');

const { check } = require('express-validator');

const { Plane } = require('../../db/models')

const router = express.Router();

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