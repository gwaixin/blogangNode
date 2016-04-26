var express = require('express');
var app = express();
var serverConf = require('./config/server');

var postsRoutes = require('./routes/PostsRoutes');

app.use('/posts/', postsRoutes);

// Set Session
// app.use(session(serverConf.session));

// Set view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.engine('html', require('ejs').__express);

// Set statics files or asset
app.use(express.static('node_modules'));
app.use(express.static('public'));



app.get('/', function (req, res) {
	var response = 'Hello Spacewayer';
	res.render('base', {title: 'Welcome to Ex-Blogang!!', page: 'landing/index'});
});


var http = require('http').Server(app);

http.listen(3030, function() {
	console.log('Example app listening on port 3030!');
});