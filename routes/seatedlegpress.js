exports.view = function(req, res){
	var data = {'redesign' : false};
	res.render('seatedlegpress', data);
};

exports.viewRedesign = function(req, res){
	var data = {'redesign' : true};
	res.render('seatedlegpress', data);
}