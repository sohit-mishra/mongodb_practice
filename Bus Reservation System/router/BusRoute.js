const { CreateBus, getBusesByOperatror, getBusesByRoute, updateBus, deleteBusFromOperator } = require('../controller/BusController');
const express = require('express');

const express = require('express');
const router = express.Router();

router.post('/bus', CreateBus);
router.get('/buses/operator/:operator', getBusesByOperatror);
router.get('/buses/route/:route', getBusesByRoute);
router.put('/bus/:bus', updateBus);
router.delete('/bus/:bus', deleteBusFromOperator);

module.exports = router;