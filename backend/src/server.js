import { app } from "./app.js";
import  http from 'node:http';
import { Server } from "socket.io";


const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

const ws = new Server(server);

ws.on('connection', (socket) => {
  console.log(`New connection ${socket.id}`);
  socket.on('connect', () => {
    console.log('jsadjfsf');
    socket.emit('fuck-you');
  })
});

server.listen(PORT, () => {
  console.log(`🚨Server running on Port ${PORT}`);
});