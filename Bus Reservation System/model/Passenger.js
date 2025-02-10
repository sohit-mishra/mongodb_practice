const mongoose = require("mongoose");

const PassengerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
    },
    reservations: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Reservation"
    }],
});

const Passenger = mongoose.model('Passenger', PassengerSchema);

module.exports = Passenger;