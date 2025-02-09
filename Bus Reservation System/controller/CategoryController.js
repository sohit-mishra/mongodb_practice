const Category = require('../model/Category');
const Product = require('../model/Product');

const createCategory = async(req,res)=>{
    try {
        const { name, description, products } = req.body;

        const existingCategory = await Category.findOne({ name });
        if (existingCategory) return res.status(400).json({ error: "Category name must be unique" });

        const category = new Category({ name, description, products });
        await category.save();

        if (products && products.length > 0) {
            await Product.updateMany({ _id: { $in: products } }, { category: category._id });
        }

        res.status(201).json({ message: "Category created successfully", category });

    } catch (error) {
        res.status(400).json({error:error.message})
    }
}


const updateCategoryDescription = async(req,res)=>{
    try {
        const category = await Category.findByIdAndUpdate(req.params.categoryId, req.body, { new: true, runValidators: true });
        if (!category) return res.status(404).json({ error: "Category not found" });

        res.status(200).json({ message: "Category updated successfully", category });
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}


const deleteCategory = async(req,res)=>{
    try {
        const category = await Category.findByIdAndDelete(req.params.categoryId);
        if (!category) return res.status(404).json({ error: "Category not found" });

        res.status(200).json({ message: "Category deleted successfully", category });
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports = { createCategory, updateCategoryDescription, deleteCategory };
