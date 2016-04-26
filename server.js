var express = require('express');
var app = express();

// Set view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.engine('html', require('ejs').__express);

// Set statics files or asset
app.use(express.static('node_modules'));
app.use(express.static('public'));

var http = require('http').Server(app);

http.listen(3030, function() {
	console.log('Example app listening on port 3030!');
});