const {CreatePassenger} = require('../model/Passenger');

const express = require('express');
const router = express.Router();

router.post('/passenger', CreatePassenger);

module.exports = router;
