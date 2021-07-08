var http = require('http');

http.createServer(function (req, res) {
  const { headers, method, url } = req;
  let body = [];
  req.on('error', (err) => {
    console.error(err);
  }).on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
  	res.writeHead(200, {'Content-Type': 'text/plain'});
  	console.log("headers start---");
  	console.log(headers);
  	console.log("headers end===");
  	console.log(body);
  	console.log("body ends===");
  	res.end("echo");
  });
}).listen(8080);
