var express = require('express');
var controler = require('../servidor/controladores/controler');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

app.use(cors());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.get('/', function(req, res){
    res.send("Hola mundo");
})
app.get('/competencias', controler.competencia);

// seteamos el puerto en el cual va a escuchar los pedidos de la aplicación
var puerto = '8080';

app.listen(puerto, function () {
    console.log("Escuchando en el puerto " + puerto);
})