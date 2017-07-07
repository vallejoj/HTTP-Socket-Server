const net = require('net');

let date= new Date()
let code="200"

let clients=[];
let  

let server = net.createServer(function(socket){


console.log('Server')

socket.write("HTTP/1.1 200 OK\nServer: nginx/1.4.6 (Ubuntu)\n" + date + "\nContent-Type: text/html; charset=utf-8Content-Length: 10\nConnection: keep-alive\n\n<h1>hello</h1>")

socket.end();



}).listen(8080)
