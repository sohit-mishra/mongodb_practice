const mongoose = require('mongoose');

const RouteSchema = new mongoose.Schema({
    start_location: {
        type: String,
        required: true
    },
    end_location: {
        type: String,
        required: true,
    },
    distance: {
        type: String,
        required: true,
    },
    buses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bus'
    }]
})

const Route = mongoose.model('Route', RouteSchema);

module.exports = Route;