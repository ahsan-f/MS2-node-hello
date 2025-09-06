const http = require('http');
const PORT = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});
server.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));
module.exports = server; // allow tests to close it
