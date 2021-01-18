const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//Create express app
const app = express();

app.get('/', (req, res) => {
   
    res.send('Hello Doido');

});

app.get('/about', (req, res) => {
   
    res.send('Hello, aqui eu falo sobre mim, pq é a url para About');

});

//Starting Server
app.listen(2000, console.log('Listening on port 2000'))