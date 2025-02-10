const mongoose = require("mongoose");

const BusSchema = new mongoose.Schema({
    bus_number:{
        type:String,
        required:true,
        unique:true,
    },
    capacity:{
        type:String,
        required:true,
    },
    operator:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Operator",
        required:true
    },
    route:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Route',
        required:true
    },
    reservations:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Reservation",
    }]
})


const Bus = mongoose.model('Bus', BusSchema);

module.exports = Bus;