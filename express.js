const express = require('express');
const bodyParser = require('body-parser');
const ability = require('./routes/ability.route'); // Imports routes for the abilities
const app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// Set up mongoose connection
const mongoose = require('mongoose');
// let dev_db_url = 'mongodb://someuser:abcd1234@ds123619.mlab.com:23619/productstutorial';
let mongoDB = process.env.MONGODB_URI; // || dev_db_url;

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// set the home page route
app.get('/', function(req, res) {
  res.send('<h3>Welcome to Force-Bot homepage</h3>');
});

app.use('/abilities', ability);

app.listen(port, () => {
  console.log('Server is up and running on port number ' + port);
});

// Keeping the bot awake by creating a request every 10 mins
var http = require("http");

setInterval(function() {
    console.log ('Keeping it awake... ' + Date.now());
    http.get("http://force-bot.herokuapp.com");
}, 600000); // every 10 minutes (600000)
