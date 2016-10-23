var http = require('http');
var router = require('./router');

http.createServer(function(request, response){
	router.home(request, response);
	router.user(request, response);
}).listen(3000, '127.0.0.1');
console.log('Server is running');

