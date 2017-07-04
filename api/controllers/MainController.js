module.exports = {

	index: function(req, res){

		VisitCounterService.incrementCount();
		res.view('homepage', {
			visitCount: VisitCounterService.getCount(),
			sailsVersion: EnvironmentService.getSailsVersion(),
		 	date: EnvironmentService.getDate()
		});

	},

	redirect: function(req, res){

		res.redirect('/spa');

	}

};
