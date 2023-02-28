const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const path = require("path");
const app = express();
const httpserver = http.Server(app);
const io = socketio(httpserver);
const gamedirectory = path.join(__dirname, "html");
app.use(express.static(gamedirectory));
httpserver.listen(3000);
const Database = require("@replit/database")
const db = new Database()


// This is the server adding likes 
io.on('connection', function(socket){
  db.get("likeCount").then(value => {
  console.log(value)
    num = value; 
    socket.emit("liked", num); 
});






socket.on("like", function(number){
    num = number += 1;
    db.set("likeCount", num).then(() => {});
    io.emit("liked", num)
  });
}); 



  

  