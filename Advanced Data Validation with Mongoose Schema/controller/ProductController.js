const Product = require('../model/Product');

const createProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json({ message: "Product created successfully", product });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {createProduct};