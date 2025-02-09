const Category = require('../model/Category');
const Product = require('../model/Product');


const createProduct = async(req,res)=>{
    try {
        const { name, price, category, stock } = req.body;

        if (price <= 0) return res.status(400).json({ error: "Price must be a positive number" });

        const existingProduct = await Product.findOne({ name });
        if (existingProduct) return res.status(400).json({ error: "Product name must be unique" });

        const product = new Product({ name, price, category, stock });
        await product.save();

        await Category.findByIdAndUpdate(category, { $push: { products: product._id } });

        res.status(201).json({ message: "Product created successfully", product });
    } catch (error) {
        res.status(400).json({error:error.message});
    }

}
const getProductsByCategory = async(req,res)=>{
    try {
        const category = await Category.findById(req.params.categoryId).populate('products');
        if (!category) return res.status(404).json({ error: "Category not found" });

        res.status(200).json(category.products);
    } catch (error) {
        res.status(400).json({error:error.message});
    }

}
const getProductDetails = async(req,res)=>{
    try {
        const product = await Product.findById(req.params.productId).populate('category');
        if (!product) return res.status(404).json({ error: "Product not found" });

        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({error:error.message});
    }

}
const updateProduct = async(req,res)=>{
    try {
        const { price, stock, category } = req.body;

        if (price && price <= 0) return res.status(400).json({ error: "Price must be positive" });

        const product = await Product.findByIdAndUpdate(req.params.productId, req.body, { new: true, runValidators: true });
        if (!product) return res.status(404).json({ error: "Product not found" });

        res.status(200).json({ message: "Product updated successfully", product });
    } catch (error) {
        res.status(400).json({error:error.message});
    }

}
const deleteProduct  = async(req,res)=>{
    try {
        const product = await Product.findByIdAndDelete(req.params.productId);
        if (!product) return res.status(404).json({ error: "Product not found" });

        await Category.updateMany({}, { $pull: { products: product._id } });

        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(400).json({error:error.message});
    }

}

module.exports = { createProduct, getProductsByCategory, getProductDetails, updateProduct, deleteProduct };
