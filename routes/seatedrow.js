exports.view = function(req, res){
	var data = {'redesign' : false};
	res.render('seatedrow', data);
};

exports.viewRedesign = function(req, res){
	var data = {'redesign' : true};
	res.render('seatedrow', data);
};