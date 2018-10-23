var http = require('http');
var request = require('request');

var server = http.createServer(function(req, res) {
  request('http://github.com/cjhoward92/ua-heroku-test', function (err, response, body) {
    if (err) {
      res.writeHead(500, err.message);
      res.end(err.message);
      return;
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(body);
  });
});

var port = process.env.PORT || 80;

server.listen(port, function() { console.log('We are listening'); });
