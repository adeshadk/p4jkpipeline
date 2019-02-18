var http = require('http');

var handleRequest = function(request, response) {
  console.log('URL requested: ' + request.url);
  response.writeHead(200);
  response.end('This is simplilearn project 4 for Devops Practioner Course on Feb 17 at 9:13am');
};
var www = http.createServer(handleRequest);
www.listen(8081);

