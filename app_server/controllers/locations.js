/* GET 'home' page */
module.exports.homelist = function(req, res, next) {
	res.render('locations-list', { title: 'Home' });
}

/* GET 'Location Info' page */
module.exports.locationInfo = function(req, res, next) {
	res.render('location-info', { title: 'Location Info' });
}

/* GET 'Add Review' page */
module.exports.addReview = function(req, res, next) {
	res.render('location-review-form', { title: 'Add Review' });
}