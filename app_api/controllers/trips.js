const mongoose = require('mongoose'); 
const Model = mongoose.model('trips');



const fetchTrip = async (req, res) => {
  if(!!req.params.tripCode) {  
      return tripsFindByCode(req, res);
  }
  return tripsList(req, res);
}



//GET: /trips - lists all the trips
const tripsList = async (req, res) => {
    Model.find({}).exec((err, trips) => {
      if (!trips) {
        return res.status(404).json({ message: "trips not found" });
      } else if (err) {
        return res.status(404).json(err);
      } else {
        return res.status(200).json(trips);
      }
    });
  };

// GET: /trips/tripCode - returns single trip
  const tripsFindByCode = async (req, res) => {
    Model.find({ code: req.params.tripCode }).exec((err, trip) => {
      if (!trip) {
        return res.status(404).json({ message: "trip not found" });
      } else if (err) {
        return res.status(404).json(err);
      } else {
        return res.status(200).json(trip);
      }
    });
  };

  module.exports = {
    fetchTrip
  };