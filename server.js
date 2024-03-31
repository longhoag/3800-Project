const express = require("express");
const path = require("path");

const app = express();
const server = require("http").createServer(app);

const io = require("socket.io")(server);

app.use(express.static(path.join(__dirname + "/site")));

io.on("connection", function(socket){
    socket.on("newUser", function(username){
        socket.broadcast.emit("update", username + " has joined the group chat");
    });

    socket.on("exitUser", function(username) {
        socket.broadcast.emit("update", username + " has quit the group chat");
    });

    socket.on("chat", function(message) {
        socket.broadcast.emit("chat " +  message);
    });    
});

server.listen(2000);
