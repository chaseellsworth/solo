var photoController = require('./photoController.js');

module.exports = function(router){
	//this '/' is the root of what we defined in app.use
	router.post('/', photoController.addPhoto);
	router.get('/', photoController.getPhotos);
}

