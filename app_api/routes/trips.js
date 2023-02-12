const express = require('express');
const {fetchTrip, tripsAddTrip, tripsUpdateTrip} = require('../controllers/trips');


const router = express.Router();
router.get('/:tripCode?', fetchTrip);  //path variable ... whatever past trip  mapping to fetchTrip
//router.post('/trips', auth, tripsAddTrip);
//router.put('/trips', auth, tripsUpdateTrip);

module.exports = router;