const express = require('express');
const tripsRouter = require('./trips');

const router = express.Router();
router.use('/trips', tripsRouter);



module.exports = router;