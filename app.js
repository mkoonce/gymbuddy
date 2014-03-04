
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var entry = require('./routes/entry');
var journal = require('./routes/journal');
var profile = require('./routes/profile');
var scan = require('./routes/scan');
var signin = require('./routes/signin');
var seatedrow = require('./routes/seatedrow');
var dumbbellsquat = require('./routes/dumbbellsquat');
var seatedlegpress = require('./routes/seatedlegpress');
var tricepdip = require('./routes/tricepdip');


// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/entry', entry.view);
app.get('/journal', journal.view);
app.get('/profile', profile.view);
app.get('/scan', scan.view);
app.get('/signin', signin.view);
app.get('/seatedrow', seatedrow.view);
app.get('/dumbbellsquat', dumbbellsquat.view);
app.get('/seatedlegpress', seatedlegpress.view);
app.get('/seated-leg-press', seatedlegpress.viewRedesign);
app.get('/tricepdip', tricepdip.view);


// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
