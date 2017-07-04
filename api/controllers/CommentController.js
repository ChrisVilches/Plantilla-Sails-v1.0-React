/**
 * CommentController
 *
 * @description :: Server-side logic for managing comments
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	create: function(req, res){
		console.log("creando");

		if(typeof req.param('text') !== 'string' || req.param('text').length == 0){
			return res.badRequest();
		}

		var text = req.param('text').trim();
		var ip = req.ip || '127.0.0.1';

		Comment.create({
			text: text,
			ip: ip
		})
		.meta({fetch: true})
		.exec(function(err, record){
			if(err) return res.serverError();
			return res.ok(record);

		});
	}
};
