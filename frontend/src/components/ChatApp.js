import  { useState } from 'react';
import socket from '../socket';

function  ChatApp() {
  const [inputMessage, setInputMessage] = useState('');


  const handleSend = () => {
    // console.log(`that is my socketID: ${socket.id}`);
    // console.log(`Message: ${inputMessage}`);
    socket.emit('send-message', { content: inputMessage });
  }
  return (
    <div className='app'>
      <header className='app-header'>
        <h1>💬ChatApp</h1>
        <p>Welcome <span>mait-taj</span></p>
      </header>

      <section className="chat-container">
        <div className='chat-header'>
          <span>User To Send</span>
          <ul>
            <li>info</li>
            <li>status</li>
          </ul>
        </div>
        {/* <div className='chat-body'></div> */}
        <div className='chat-body'>
          <p>inputMessage</p>
          <p>inputMessage</p>
          <p>inputMessage</p>
          <p>inputMessage</p>
          <p>inputMessage</p>
          <p>inputMessage</p>
          <p>${console.log('that is my socketID: ' + socket.id)}</p>
        </div>
        <div className='chat-footer'>
          <form onSubmit={handleSend}>
            <input
              type='text'
              value={inputMessage}
              onChange={(event) => setInputMessage(event.target.value)}
              placeholder="✍🏼Type a message..."
              />
            <button type='submit' >⌲Send</button>
          </form>
        </div>
        <h1>Message: ${inputMessage}</h1>
      </section>
    </div>
  );

}
export default  ChatApp;