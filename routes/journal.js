var data = require('../data.json');

exports.view = function(req, res){
	var userID = "1";
	userID = parseInt(userID);
	var userInfo = data[userID-1];

	res.render('journal', userInfo);
};