var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongojs = require('mongojs');


// app setup
var app = express();
var port = 8080;

// controllers
var heroCtrl = require('./api/controllers/heroCtrl');

// database setup
var db = mongojs('heroes', ['lists']);

// setup the app middlware
app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(cors());

// setup the api
app.get('/api/heroes', heroCtrl.read);
app.post('/api/heroes', heroCtrl.create);
// app.put('/api/heroes', heroCtrl.update);
// app.delete('/api/heroes', heroCtrl.destroy);
// set up global error handling


app.listen(port, function() {
	console.log('I\'m watching you... creepy!!! ', port);
});