const express= require('express');
//import {express} from express; Node.js this version does not have a ES2015 module.

const app= express();

app.get('/',(req,res)=>{
    res.send({1:'This is the Home Page'});
});

const Port = process.env.Port || 5000
app.listen(Port);


//localhost:5000 is the port for deployment and process.env.port is used in production such as Hiroku.
//Behind the scenes , Node is listening for traffic from port 5000. Express is telling Node to listen on port 5000.