var express = require('express');
var postsRoutes = express.Router();
var bodyParser = require('body-parser');

postsRoutes.use(bodyParser.urlencoded({extended: true}));

postsRoutes.get('/', function(req, res) {
	res.render('base', processLocal('/posts/index', 'Post Dashboard'));
});

function processLocal(page, title) {
	return {
		page: page,
		title: title
	};
}

module.exports = postsRoutes;