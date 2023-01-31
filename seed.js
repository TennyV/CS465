const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

const seed = async function() {
    // Seed TRIPS
    const trips = JSON.parse(fs.readFileSync(path.join('data', 'trips.json'), 'utf8'));
    const trip = mongoose.model('trip');
    await trip.deleteMany(); // removes all TRIPS data
    await trip.insertMany(trips);
}

module.exports = {

    modelBaseDirectory: 'app_server/database/models',
    models: ['*js', '!db.js'],
    data: 'data',
    db: "mongodb://127:.0.0.1:27017/travlr", // db connection url
};
