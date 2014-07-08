var http = require('http'); //how we require modules

http.createServer(function (request, response){
	response.writeHead(200); //status code in header
	response.write("Hello, World"); //response body

	setTimeout(function() {
		response.write('Dog is done.');
		response.end();
	}, 5000); //5000 milliseconds = 5 secs
	response.end(); //close the connection
}).listen(8080); //listen for connections on this port
console.log('listening on port 8080')

//register request event
//then event loop continuosly. run callback and prints hello this is dog
//js is evented programming in event loops.
//no blocking code
