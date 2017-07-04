/**
 * CommentController
 *
 * @description :: Server-side logic for managing comments
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	subscribeComments: function(req, res){

		if (!req.isSocket) {
			return res.badRequest();
		}
		sails.sockets.join(req, 'commentRoom', function(err) {
			if (err) {
				return res.serverError(err);
			}
			return res.ok("Subscribed to comments!");
		});
	},

	create: function(req, res){

		if(typeof req.param('text') !== 'string'){
			return res.badRequest();
		}

		var text = req.param('text').trim();

		if(text.length == 0){
			return res.badRequest();
		}

		var ip = req.ip || '127.0.0.1';

		Comment.create({
			text: text,
			ip: ip
		})
		.meta({fetch: true})
		.exec(function(err, record){
			if(err) return res.serverError();

			sails.sockets.broadcast('commentRoom', 'commentCreated', { data: record }, req);

			return res.ok(record);

		});
	}
};
