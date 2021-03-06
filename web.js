var express = require('express');
var fs=require('fs');
var buffer = new Buffer(fs.readFileSync('index.html'));
var hello = buffer.toString('utf-8');


var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(hello);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
