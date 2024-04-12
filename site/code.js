(function() {
    const app = document.querySelector(".app");
    const socket = io();

    let name;

    // click to register new user
    app.querySelector(".signup-screen #join-user").addEventListener("click", function(){
        let username = app.querySelector(".signup-screen #username").value;

        // if non-input, do nothing
        if (username.length == 0) {
            return;
        }

        socket.emit("newUser", username);
        name = username;

        //showing chat screen after login
        app.querySelector(".signup-screen").classList.remove("active");
        app.querySelector(".chat-screen").classList.add("active");
    });

    // click enter to click the button for intuitiveness: on login
    app.querySelector(".signup-screen #username").addEventListener("keydown", function(event) {
        if (event.keyCode == 13) {
           event.preventDefault();
           app.querySelector(".signup-screen #join-user").click();
        }
    });

    // click to send messages to the server and the server will render the messages to all users
    app.querySelector(".chat-screen #send-message").addEventListener("click", function() {
        let message = app.querySelector(".chat-screen #message-input").value;
        if (message.length == 0) {
            return;
        }
        loadMessage("my", {
            username: name,
            text: message
        });
        socket.emit("chat", {
            username: name,
            text: message
        });
        app.querySelector(".chat-screen #message-input").value = "";
    });

    // click enter to click the button for intuitiveness: on chat screen
    app.querySelector(".chat-screen #message-input").addEventListener("keydown", function(event) {
        if (event.keyCode == 13) {
           event.preventDefault();
           app.querySelector(".chat-screen #send-message").click();
        }
    });

    // leave chat click button
    app.querySelector(".chat-screen #leave-chat").addEventListener("click", function() {
        socket.emit("exitUser", name);
        window.location.href = window.location.href;
    });

    // load messsages to all users
    socket.on("update", function(update) {
        loadMessage("update", update);
    });
    socket.on("chat", function(message){
        loadMessage("other", message);
    });

    // load message by appending dynamically html code to show on the screen
    function loadMessage(type, message) {
        let messageContainer = app.querySelector(".chat-screen .messages");

        // show message me type
        if(type == "my") {
            let element = document.createElement("div");
            element.setAttribute("class", "message my-message");
            element.innerHTML = `
                <div>
                    <div class="name"> You </div>
                    <div class="text"> ${message.text} </div> 
                </div>
            `;
            messageContainer.appendChild(element);
        }
        // show message others type
        else if (type == "other") {
            let element = document.createElement("div");
            element.setAttribute("class", "message other-message");
            element.innerHTML = `
                <div>
                    <div class="name"> ${message.username} </div>
                    <div class="text"> ${message.text} </div> 
                </div>
            `;
            messageContainer.appendChild(element);
        }

        // update info of users joining and exiting
        else if (type == "update") {
            let element = document.createElement("div");
            element.setAttribute("class", "update");
            element.innerText = message;
            messageContainer.appendChild(element);
        }
        // showing end of the chat
        messageContainer.scrollTop = messageContainer.scrollHeight - messageContainer.clientHeight;
    }
})();