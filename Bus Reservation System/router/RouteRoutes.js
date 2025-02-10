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
    router.get('/reservation/:reservationId', getReservationDetails);
    router.get('/reservations/passenger/:passengerId', getReservationByPassenger);
    router.put('/reservation/:reservationId', updateReservation);
    router.delete('/reservation/:reservationId', cancelReservation);
    
    const { CreateRoute, updateRoute, deleteRoute } = require('../controller/RouteController');
    
    router.post('/route', CreateRoute);
    router.put('/route/:route', updateRoute);
    router.delete('/route/:route', deleteRoute);
    
    module.exports = router;
    
    