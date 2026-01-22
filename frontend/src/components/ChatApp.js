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
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-xl flex flex-col overflow-hidden">
        <header className="flex items-center justify-between px-6 py-4 bg-white border-b">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-semibold">💬 ChatApp</h1>
            <p className="text-sm text-gray-500">Welcome <span className="font-medium">mait-taj</span></p>
          </div>
          <div className="text-sm text-gray-400">Online</div>
        </header>

        <main className="flex-1 p-4 overflow-auto">
          <div className="flex flex-col space-y-3">
            {/* {messages.map((m) => {
              const mine = m.author === 'me';
              return (
                <div
                  key={m.id}
                  className={`flex ${mine ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`${mine ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-900'} rounded-xl px-4 py-2 max-w-[70%] whitespace-pre-wrap`}>
                    {m.content}
                  </div>
                </div>
              );
            })}
            <div ref={messagesEndRef} /> */}
          </div>
        </main>

        <form onSubmit={handleSend} className="px-4 py-3 bg-white border-t flex items-center gap-3">
          <input
            value={inputMessage}
            onChange={(ev) => setInputMessage(ev.target.value)}
            className="flex-1 rounded-full border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="✍🏼 Type a message..."
            aria-label="Type a message"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-full disabled:opacity-50"
            disabled={!inputMessage.trim()}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
export default  ChatApp;