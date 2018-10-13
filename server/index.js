//var http = require("http");
var express = require('express');
const path = require('path');
 
var app = express();

var prt = process.env.PORT || 3600;
process.env.NODE_ENV = 'development';
var server = app.listen(prt, function () {
   var host = server.address().address
   var port = server.address().port   
   console.log("Example app listening at http://%s:%s", host, port)
})


app.use(express.static(path.resolve(__dirname,'../src')));

app.get('/*',function(req, res){
  res.sendFile(path.resolve(__dirname,'../src','index.html'));
});

