const express = require("express");
const path = require("path");

// create node js server
const app = express();
const server = require("http").createServer(app);

// declare communication
const io = require("socket.io")(server);

// website source code in folder /site
app.use(express.static(path.join(__dirname + "/site")));

io.on("connection", function(socket){

    // send signal new users log in
    socket.on("newUser", function(username){
        socket.broadcast.emit("update", username + " has joined the group chat");
    });

    // send signal users exit
    socket.on("exitUser", function(username) {
        socket.broadcast.emit("update", username + " has left the group chat");
    });

    // send signal chatting
    socket.on("chat", function(message) {
        socket.broadcast.emit("chat", message);
    });    
});

// server port
server.listen(8000);
