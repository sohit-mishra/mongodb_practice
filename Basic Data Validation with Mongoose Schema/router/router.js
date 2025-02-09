const { createContact } = require('../controller/contactController');
const express = require('express');
const router = express.Router();

router.post('/create', createContact); 

module.exports = router;
