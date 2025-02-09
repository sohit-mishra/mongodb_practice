const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: [true, "Product name is required"],
        maxlength: [50, "Product name cannot exceed 50 characters"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [0.01, "Price must be greater than 0"]
    },
    category: {
        type: String,
        required: [true, "Category is required"],
        enum: {
            values: ["Electronics", "Clothing", "Books", "Home Appliances"],
            message: "Category must be one of Electronics, Clothing, Books, Home Appliances"
        }
    },
    stock: {
        type: Number,
        required: [true, "Stock quantity is required"],
        min: [0, "Stock cannot be negative"],
        validate: {
            validator: Number.isInteger,
            message: "Stock must be an integer value"
        }
    },
    SKU: {
        type: String,
        required: [true, "SKU is required"],
        unique: true,
        match: [/^PROD-\w{4}$/, "SKU must follow the pattern PROD-XXXX"]
    },
    tags: {
        type: [String],
        validate: {
            validator: function(tags) {
                const tagRegex = /^[a-zA-Z0-9]+$/;
                return tags.every(tag => tag.length > 0 && tagRegex.test(tag));
            },
            message: "Tags should be non-empty and contain only alphanumeric characters"
        }
    }
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
