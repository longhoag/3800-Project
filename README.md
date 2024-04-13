# 3800-Project: Client-server Web Chat Application

## Introduction
This project is the client and server chat application website. The website displays a basic chat room interface allowing users to login with their unique usernames and chat with other users. 
## Project description
### Overview

-This project aims to create a chatting room environment, whose server will record any messages from a client and display them to other users in the group chat. The goal of the project is to log users into the group chat, and allow them to send and receive messages from other users in real-time.

### User Interface
- The project website features a simple chat room interface with two main pages: sign up page and group chat page. 

- The sign up page will allow users to sign up and join the group chat by entering their username and clicking the "Join" button. 

- The group chat page will appear once a user joins the group chat, where they can send and see messages from other users in the group chat. This screen includes a header with an "Leave Chat" button option to leave the chat, a container for displaying messages, and a section for typing and sending messages. 

### Programming Languages
- This project website is created using HTML for the structures, CSS for the styling, and JavaScript for the functionality. The server which hosts the website is created using Node.js.

## User Manual on Running the Program

- The user’s manual text file will be available through Canvas submission. In addition, the text below also features a brief summary of the manual.

#### Step 1: 
Install Node.js on your system.

#### Step 2: 
In your system terminal, locate in the project folder and run the following command to initiate the server. Make sure your path is in the project's main folder which has the server.js file.
`node server.js`  

#### Step 3: 
Open your preferred web browser window and go to `localhost:8000` in your address bar.

#### Step 4: 
Enter your username and click the Join button to join and start messaging.

#### Step 5: 
Open another web browser window and go to `localhost:8000` in your address bar again. Enter your username and click the Join button to join. When you start messaging on either of your web browser windows, the messages you sent will appear in other users’ chat interfaces.

#### Step 6: 
If you wish to leave the group chat, you can click the “Leave Chat” button. Once you leave, it will notify other existing users in the group chat of your leaving. 

## Results and Discussion
- Our chat application is able to queue at least 10 clients, and it broadcasts any messages from a client to the other participants. Moreover, whenever a client joins or leaves the server, the server will send a status message about it to the group chat to notify other clients in the group. For example, it will show up on screen “client has joined the group chat “ or “client has left the group chat.” 


- In addition, our chat application supports multiple languages. We have tested different languages such as Spanish, French, Chinese, Japanese, Russian, and of course English. The messages and the usernames, which the clients use, display normally with these languages without any error. 


- Last but not least, since our server runs on the local host, the server can then broadcast messages to all other connected clients almost instantly when a client sends a message to the server. Furthermore, localhost allows clients to use the chat server and client application offline without an internet connection. We have tested that and the functions worked well as a result. We also observed a slight increase in memory usage of running the server as the connections to the server increased. 
