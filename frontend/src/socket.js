import  io  from 'socket.io-client';

const SOCKET_URL = 'http://localhost:4000';

const socket = io.connect(SOCKET_URL);

// socket.on('connect', () => {
//   console.log('connected **************');
// });

export default  socket;

