const mongoose = require('mongoose');

const OperatorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    conact_info:{
        type:String,
        required:true,
    },
    buses:[{
        type:mongoose.Schema.Types.ObjectId, 
        ref:"Bus", 
    }]
})

const Operator = mongoose.model('Operator', OperatorSchema);

module.exports = Operator;