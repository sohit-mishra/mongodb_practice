const mongoose = require('mongoose');
const config = require('./config')
const URI = config.URI;

const connectToDatabse = async()=>{
    try {
        await mongoose.connect(URI);
        console.log('connect Database')
    } catch (error) {
        console.log("not connect Database");
    }
}

module.exports = connectToDatabse;