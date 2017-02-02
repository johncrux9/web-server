var express = require('express');
var app = express();

var middleware = require('./middleware.js')

// specify above routes to protect
// at this leve it is application middleware
//app.use(middleware.requireAuthentication);
app.use(middleware.logger);

// route to answer a GET at /about
// can also put middleware as second argument to just run as route specific middleware
app.get('/about', middleware.requireAuthentication, function (req, res) {
   res.send('About Us');
});

// express static exposes a folder, __dirname gets working directory
// exposed at root of website
app.use(express.static(__dirname + '/public'));

var PORT = 3000;

// second argument calls a function when server starts up
app.listen(PORT, function() {
    console.log('Express server started on port ' + PORT);
});
