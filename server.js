'use strict';
//copied the first few lines of code below from npm website, express library
// needed to download express as well (npm install -S express) told it to install and save express

//dont have index(html) on backend, so in order to bring in a library you need to use word 'require' 
// the below line will bring in the express library
// we would have done this before by linking to a library using a script tag

const express = require('express');

//bring in the dotenv library, then need to install in terminal (npm install -S dotenv)
//job of this library is to find the .env file and get the variables out of it so that we can use them in our js file
require('dotenv').config();

const app = express()
// this gives us a variable we can use to run all the methods that are in the express library

//this lets us serve a website from a directory
app.use(express.static('.public'));

//the dotenv library lets us grab the PORT var from the .env using the magic words process.env.variableName, and now we can put the word 'PORT' in app.listen() instead of having 3000 in there
const PORT = process.env.PORT;

// the below is how the server works. app is the server. the .get below is the same type of get as what we did for ajax. / is the "route" which means whatever comes after the port. then you have callback function that takes in two parameters, request and response
app.get('/', function (request, response) {
  response.send('Hello World');
})

//the below turns on the server. we built the house before but nobody is living there until we do the below. house address is PORT 3000
// first argument is port youre listennig on, second is callback function to tell us something to know its working
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});