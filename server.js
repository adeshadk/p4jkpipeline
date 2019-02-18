var http = require('http');

var handleRequest = function(request, response) {
  console.log('URL requested: ' + request.url);
  response.writeHead(200);
  response.end('This is simplilearn project 4 for Devops Practioner Course on Feb 16 at 11:00am');
};
var www = http.createServer(handleRequest);
www.listen(8081);

