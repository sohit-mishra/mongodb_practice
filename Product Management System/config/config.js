require('dotenv').config();

const config = {
    PORT: process.env.PORT || 3000, 
    URI: process.env.MONGOOSE_URI,  
}

module.exports = config;