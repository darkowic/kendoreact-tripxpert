
const express = require('express');
const proxy = require('./proxy');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json());

//add headers to disable CORS
app.use((req, res, next) => {
  //allow to all servers -> will be changed to our localhost:3000 for example
  res.setHeader('Access-Control-Allow-Origin', '*');
  //allow methods
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
  //client can send request with headers (content type)
  res.setHeader('Access-Control-Allow-Headers', '*')
  next();
});

app.use("/api/", proxy);


app.listen(8090);



console.log("working");
