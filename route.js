var express = require('express');
var app = express();

app.get('/', function(req, res){
    console.log("Got a get request for home page");
    res.send('Hello GET');
})

app.post('/', function(req, res){
    console.log("Got a POST request for home page" );
    res.send('Hello POST');
})

app.delete('/del_user', function(req, res){
    console.log("Got a DELETE request for /del_user" );
    res.send('Hello DELETE');
})

app.delete('/list_user', function(req, res){
    console.log("Got a GET request for /list_user" );
    res.send('Page Listening');
})

app.get('/ab*cd', function(req, res){
    console.log("Got a GET request for /ab*cd" );
    res.send('Hello Pattern Match');
})

var server = app.listen(8081, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port);
})