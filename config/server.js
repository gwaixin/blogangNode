
// Set local variables // can be access to views
global.siteTitle = 'Blogang';
global.siteDescription = 'Blog + Angular + express for blah blah blah Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel nam magnam natus tempora cumque, aliquam deleniti voluptatibus voluptas. Repellat vel, et itaque commodi iste ab, laudantium voluptas deserunt nobis. Rerum!';
global.siteCopy = 'Copyright © '+siteTitle+' 2015';
global.authorName = 'Nichole John Martinez';
global.authorContact = 'xinmartinez@gmail.com';

module.exports = {
	'session': {
		secret: 'spacewaytttteeeeedeeeert',
		cookie: {maxAge: 3600000},
		resave: true,
		saveUninitialized: true
	}
};