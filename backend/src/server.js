import { app } from "./app.js";
import  http from 'node:http';
import { Server } from "socket.io";
import  dotenv  from  'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3001;

const server = http.createServer(app);

const ws = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL
  }
});

ws.on('connection', (socket) => {
  console.log('new connection', socket.id);
  socket.on('disconnect', () => console.log(`User ${socket.id} Disconnected `));
  socket.broadcast.emit('welcome', `Welcome to the server ${socket.id}`);
});

server.listen(PORT, () => {
  console.log(`🚨Server running on Port ${PORT}`);
});