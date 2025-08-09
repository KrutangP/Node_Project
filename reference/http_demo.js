const http = require('http');

// Create server object
const server = http.createServer((req, res) => {
    
    res.write('Hello World!\n');
    res.end();
}).listen(5000, () => {
    console.log('Server running')});