import  { useState, useEffect, useRef } from 'react';
import socket from '../socket';
import '../css/style.css'

function  ChatApp() {
  const [allMessages, setMessages] = useState([
    {
      id: 1,
      user: 'me',
      message: 'hiii!'
    },
    {
      id: 2,
      user: 'imposter',
      message: 'i get it'
    }
  ]);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }
  useEffect(() => {
    scrollToBottom();
  }, [allMessages])


  const handleSubmit = () => {
    if (inputMessage.trim() === '') return;
    const newMess = {
      id: allMessages.length + 1,
      user: 'me',
      message: inputMessage
    };
    setMessages([...allMessages, newMess]);
    setInputMessage('');
  }
  const [inputMessage, setInputMessage] = useState('');

  useEffect(() => {
    socket.on('connect', () => console.log(`i'm connected: ${socket.id}`));
    socket.on('welcome', (messg) => console.log(messg));
  }, []);

    return (
    <div style={styles.app}>
        {/* header */}
      <div style={styles.header}>
          <h1 className="title">💬 ChatApp</h1>
          <span style={styles.status}>●Status</span>
      </div>
        {/* messages */}
      <div style={styles.messageContainer}>
      {allMessages.map((mes) => (
        <div
          key={mes.id}
          style={{...styles.messageWrapper, justifyContent: mes.user === 'me' ? 'flex-end' : 'flex-start'} }
        >
          <div
            style={{...styles.message,
              backgroundColor: mes.user === 'me' ? '#667eea' : '#e0e0e0',
              color: mes.user === 'me' ? 'white' : 'black'
            }}
          >
            <p style={styles.messageName}>{mes.user}</p>
            <p style={styles.messageText}>{mes.message}</p>

          </div>
        </div>
      ))}
      <div ref={messagesEndRef}></div>
      </div>
      {/* from */}
      <div className="form-submission">
        <input
          placeholder="type message..."
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button onClick={handleSubmit}>Send</button>
      </div>
    </div>
  );
}

const styles = {
  app: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.5rem 2rem',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'

  },
  status: {
    fontSize: '0.9rem'
  },
  messageContainer: {
    flex: 1,
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    backgroundColor: 'green',
    overflowY: 'auto'
  },
  messageWrapper: {
    marginBottom: '0.9rem',
    display: 'flex'
  },
  message: {
    maxWidth: '60%',
    padding: '0.75rem 1rem',
    borderRadius: '10px',
    wordWrap: 'break-word'
  },
  messageName: {
    margin: '0 0 0.25rem 0',
    fontSize: '0.85rem',
    fontWeight: 'bold',
    opacity: '0.5'
  },
  messageText: {
    margin: '0.25rem 0',
    fontSize: '1rem'
  }

}
export default  ChatApp;