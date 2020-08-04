//Test Node
// var http = require("http");
// http.createServer(function (request, response) {
//    //response.writeHead(200, {'Content-Type': 'text/plain'});
//    response.end('Hello World\n');
// }).listen(8081);


// console.log('Server running at http://127.0.0.1:8081/');


// Test Express
const express = require('express');
const app =express();

app.get('/', function(req, res){
    res.send("Hello World")
})
var server = app.listen(8082, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port);
})