const express = require('express');
const path = require('path');
const {fileURLToPath} = require('url');
const hbs = require('hbs');
require('dotenv').config()


const app = express();
const port = process.env.PORT;
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/parcials');
console.log(port)




app.use(express.static(__dirname + '/public', {
    extensions: ['html']
  }));

app.get('/',  (req, res) => {
    res.render('home', {
        nombre: "Juan Vargas",
        titulo: "Node JS With Express",
    });
})

app.get('/generic',  (req, res) => {
    res.render('generic', {});
})

app.get('/elements',  (req, res) => {
    res.render('elements', {});
})





app.get('*',  (req, res) => {
    res.sendFile( __dirname + "/public/404.html");
})

app.listen(port);