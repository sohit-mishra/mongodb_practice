const express = require('express');
const { createProduct} = require('../controller/ProductController');

const router = express.Router();

router.post('/products', createProduct);

module.exports = router;
