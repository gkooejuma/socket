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
//----------------------------------

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
 const nodemailer = require('nodemailer');









var date_time = new Date().getSeconds();
console.log(date_time);

const transporter = nodemailer.createTransport({
  service: 'Hotmail',
  auth: {
    user: 'jumaAboke@outlook.com',
    pass: 'Armstrongvenus21'
  }
});

const mailOptions = {
  from: 'jumaAboke@outlook.com',
  to: 'jumaAboke@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};


var fs = require('fs');


let play = []; 

try {  
    var data = fs.readFileSync('sent.js', 'utf8');
    play = JSON.parse(data.toString()); 
    console.log(play)
  
} catch(e) {
    console.log('Error:', e.stack);
}



// setInterval(function(){
// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });
// }, 10000); 
  

  