## backend/
├── src/
│   ├── app.js                # Express app
│   ├── server.js             # HTTP + WebSocket start
│
│   ├── config/
│   │   ├── db.js
│   │   └── env.js
│
│   ├── middlewares/
│   │   ├── auth.middleware.js
│   │   └── error.middleware.js
│
│   ├── modules/
│   │   ├── auth/
│   │   │   ├── auth.routes.js
│   │   │   ├── auth.controller.js
│   │   │   └── auth.service.js
│   │   │
│   │   ├── users/
│   │   │   ├── user.model.js
│   │   │   ├── user.routes.js
│   │   │   ├── user.controller.js
│   │   │   └── user.service.js
│   │   │
│   │   ├── profiles/
│   │   │   ├── profile.model.js
│   │   │   ├── profile.routes.js
│   │   │   └── profile.controller.js
│   │   │
│   │   ├── friends/
│   │   │   ├── friends.model.js
│   │   │   ├── friends.routes.js
│   │   │   └── friends.controller.js
│   │   │
│   │   └── chat/
│   │       ├── message.model.js
│   │       ├── chat.socket.js
│   │       └── chat.service.js
│
│   └── utils/
│       ├── jwt.js
│       └── logger.js
│
└── package.json
