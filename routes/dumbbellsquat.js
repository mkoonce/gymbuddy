exports.view = function(req, res){
	var data = {'redesign' : false};
	res.render('dumbbellsquat', data);
};

exports.viewRedesign = function(req, res){
	var data = {'redesign' : true};
	res.render('dumbbellsquat', data);
};