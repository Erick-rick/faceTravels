var express = require('express');
var app = express();

app.use(express.static(__dirname+ '/app'));
var port = 8080;

app.listen(port, function() {
	console.log('Servidor carregando na porta ' + port);
});


// Habilitando CORS no NodeJS/Express (server)
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST","PUT");
  next();
});