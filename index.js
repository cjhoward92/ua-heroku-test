var http = require('http');

var server = http.createServer(function(req, res) {
  res.end('Hello, world!');
});

var port = process.env.PORT || 80;

server.listen(port, function() { console.log('We are listening'); });
