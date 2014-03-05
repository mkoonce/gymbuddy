exports.view = function(req, res){
	var data = {'redesign' : false};
	res.render('tricepdip', data);
};

exports.viewRedesign = function(req, res){
	var data = {'redesign' : true};
	res.render('tricepdip', data);
};