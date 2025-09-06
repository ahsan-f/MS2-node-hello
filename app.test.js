const http = require('http');
test('server returns Hello World', async () => {
  // Start server for the test
  const server = require('./index'); // index.js starts server immediately

  // Wait a bit to ensure server is up (quick-and-dirty for demo)
  await new Promise(r => setTimeout(r, 200));

  const body = await new Promise((resolve, reject) => {
    http.get('http://localhost:3000', res => {
      let data = '';
      res.on('data', c => (data += c));
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
 expect(body).toMatch(/Hello World/);
    if (server && server.close) server.close();
});
