const mongoose = require('mongoose');
const Product = require('./Product');

const CategorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    description:{
        type:String,
    },
    products:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product'
    }]
});

const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;