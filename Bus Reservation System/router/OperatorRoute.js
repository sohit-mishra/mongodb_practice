const { CreateOperator, updateOperator, deleteOperator } = require('../controller/OperatorController');

const express = require('express')
const router = express.Router();

router.post('/operator', CreateOperator);  
router.put('/operator/:operator', updateOperator); 
router.delete('/operator/:operator', deleteOperator); 
module.exports = router;