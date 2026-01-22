Design guidance (beginner-friendly patterns)

Page container: make the app full height with a centered chat column.
Use min-h-screen flex flex-col on root container.

Header: simple top bar with bg-white shadow px-4 py-3.

Messages area:
Use a scrollable area: flex-1 overflow-auto p-4 space-y-3
Map a messages array to render bubbles.
For your messages: self-end bg-blue-600 text-white rounded-xl px-4 py-2 max-w-[70%]
For others: self-start bg-gray-200 text-gray-900 rounded-xl px-4 py-2 max-w-[70%]
Input area:
Sticky/bottom row: bg-white px-4 py-3 border-t flex items-center gap-2
Input: flex-1 rounded-full border px-4 py-2 focus:outline-none
Send button: bg-blue-600 text-white rounded-full px-4 py-2 disabled:opacity-50
Small utilities:
Use space-y-2 between messages
Use max-w-[70%] to avoid full-width bubbles
Use whitespace-pre-wrap if you want to preserve line breaks
Socket + form notes (important)
Prevent default form submission with event.preventDefault().
Trim the message, ignore empty strings.
Append a local message immediately for optimistic UI: setMessages(prev => [...prev, msg]).
Listen for incoming messages with socket.on('receive-message', handler) and clean up in useEffect.
