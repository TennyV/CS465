/* GET travel view */
const travel = (req, res) => {
    res.render('travel', {title: 'Travel Getaways'});
};
module.exports = {
    travel
};