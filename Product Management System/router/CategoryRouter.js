const  { createCategory, updateCategoryDescription, deleteCategory } = require('../controller/CategoryController');
const express = require('express');
const router = express.Router();

router.post('/create', createCategory);
router.put('/:categoryId', updateCategoryDescription);
router.delete('/:categoryId', deleteCategory);

module.exports = router;

