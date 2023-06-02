const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const path = require("path");
const app = express();
const httpserver = http.Server(app);
let io = socketio(httpserver);
const gamedirectory = path.join(__dirname, "node-html");
app.use(express.static(gamedirectory));
httpserver.listen(3000);
const fs = require('fs');
//----------------------------------

// This is the server adding likes 
io.on('connection', function(socket){

//fsgsfgsfd

socket.on("like", function(number){
    num = number += 1;
    
    io.emit("liked", num)
  });
}); 

app.get('/one/two', function (req, res) {
  var url = req.url;
}); 



var request = require('request');
request("http://localhost:3000/", {method: 'HEAD'}, function (err, res, body){
});





///0 dist compiler
fs.readFile('dist/.request-node', 'utf8', function(err, data){
  //console.log(err); 
  fs.writeFile('dist/app.html', data, { flag: 'w+' }, err => {})
});



setInterval(() => {
  fs.readFile('dist/.request-node', 'utf8', function(err, data){
    //console.log(err); 
    fs.writeFile('dist/app.html', data, { flag: 'w+' }, err => {})
  });
  
}, 5000);


