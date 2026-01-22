import { app } from "./app.js";
import  http from 'node:http';
import { Server } from "socket.io";

const PORT = process.env.PORT || 3001;

const server = http.createServer(app);

const ws = new Server(server, {
  cors: {
    origin: 'http://localhost:3000'
  }
}); 

ws.on('connection', (socket) => {
  console.log(`New connection ${socket.id}`);
  // socket.on('connect', () => {
  //   console.log('jsadjfsf');
  //   socket.emit('fuck-you');
  // });
  socket.on('send-message', (message) => {
    console.log('I get the message: ' + message + ' from ' + socket.id);
    socket.emit('get', {
      user: 'mait-taj',
      age: 22
    });
  });
});

server.listen(PORT, () => {
  console.log(`🚨Server running on Port ${PORT}`);
});