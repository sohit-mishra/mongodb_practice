const {
    CreateReservation,
    getReservationDetails,
    getReservationByPassenger,
    updateReservation,
    cancelReservation
} = require('../controller/ReservationController');

const express = require('express');
const router = express.Router();

router.post('/reservation', CreateReservation);
router.get('/reservation/:reservation', getReservationDetails);
router.get('/reservations/passenger/:passenger', getReservationByPassenger);
router.put('/reservation/:reservation', updateReservation);
router.delete('/reservation/:reservation', cancelReservation);

module.exports = router;

