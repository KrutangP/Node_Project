const  url = require('url');

const myURL = new URL('https://example.com:8000/hello.html?id=100&status=active');

// //Serializing URL
// console.log('Serialized URL:', myURL.href);
// console.log('Serialized URL (toString):', myURL.toString());

// // Host (root domain) with port
// console.log('Host:', myURL.host);

// // Hostname without port
// console.log('Hostname:', myURL.hostname);

// // Pathname
// console.log('Pathname:', myURL.pathname);

// // Serealized query
// console.log('Serialized Query:', myURL.search);
