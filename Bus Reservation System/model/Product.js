const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Category',
        required: true
    },
    stock:{
        type:Number,
        required:true,
        default:0,
    },
    created_at:{
        type:Date,
        default:Date.now
    }
});


const Product = new mongoose.model('Product', ProductSchema);

module.exports = Product;