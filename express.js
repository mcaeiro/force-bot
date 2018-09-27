const express = require('express');
const bodyParser = require('body-parser');
const ability = require('./routes/ability.route'); // Imports routes for the abilities
const app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

app.use('/abilities', ability);

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});
