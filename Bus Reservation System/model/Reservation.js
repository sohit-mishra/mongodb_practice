const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
    bus:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Bus',
        required:true,
    },
    passenger:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
    },
    seat_number:{
        type:Number,
        required:true,
    },
    reservation_date:{
        type:Date,
        default:Date.now
    }
})

const Reservation = mongoose.model('Reservation', ReservationSchema);

module.exports = Reservation;