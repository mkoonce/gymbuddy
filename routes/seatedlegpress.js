exports.view = function(req, res){
	var data = {'redesign' : true};
	res.render('seatedlegpress', data);
};

exports.viewOld = function(req, res){
	var data = {'redesign' : false};
	res.render('seatedlegpress', data);
}