//import {express} from express; Node.js this version does not have a ES2015 module.
const express= require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');

require('./Models/User');
require('./Models/Survey');
require('./services/passport');

mongoose.connect(keys.mongooseURL, {useNewUrlParser: true, useUnifiedTopology: true}).catch(err=>{console.error(err.stack)})

const app= express();

app.use(
    bodyParser.json()
);

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000, //30 days in milli second
        keys: [keys.cookieKey]        
    })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

const Port = process.env.Port || 5000
app.listen(Port);

//localhost:5000 is the port for deployment and process.env.port is used in production such as Hiroku.
//Behind the scenes , Node is listening for traffic from port 5000. Express is telling Node to listen on port 5000.