// index.js
const http = require('http');
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    // ... server logic
});

server.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));

// 🔑 CRUCIAL LINE: Export the server instance
module.exports = server;
