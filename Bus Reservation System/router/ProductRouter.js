const { createProduct, getProductsByCategory, getProductDetails, updateProduct, deleteProduct } = require('../controller/ProductController'); 
const express = require('express');
const router = express.Router();

router.post('/create', createProduct); 
router.get('/category/:categoryId', getProductsByCategory);
router.get('/:productId', getProductDetails);
router.put('/:productId', updateProduct);
router.delete('/:productId', deleteProduct);

module.exports = router;
