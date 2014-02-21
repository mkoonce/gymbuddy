var workouts = require('../workouts.json');

exports.view = function(req, res){
	var url = require('url');
	var url_parts = url.parse(req.url, true);
	var workoutPath = url_parts.query['lastPage'];

	var data = ({});

	var i;
	for(i=0; i<workouts.length; i++){
		if(workouts[i].path == workoutPath){
			data = workouts[i];
		}
	}

	//console.log(data);

	res.render('entry', data);
};