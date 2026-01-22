import  io  from 'socket.io-client';

const SOCKET_URL = 'http://localhost:3001';

const socket = io.connect(SOCKET_URL);

// socket.on('connect', () => {
//   console.log('connected **************');
// });

export default  socket;

