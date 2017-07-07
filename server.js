const net = require('net');
const fs= require('fs');
const date= new Date()

const error404 = fs.readFileSync('./public/404.html');
const helium = fs.readFileSync('./public/helium.html');
const hydrogen = fs.readFileSync('./public/hydrogen.html');
const index = fs.readFileSync('./public/index.html');
const css = fs.readFileSync('./public/styles.css');

let server = net.createServer(function(socket){

socket.on('data' , (data) => {
  const myData = data.toString().split('\n');
  const myArray =  myData[0].split(' ');
  const path = myArray[1];
console.log(path)
  switch (path) {

    case '/':
     socket.write(insertData('200 OK', 'text/html', index));
     socket.end();
     break;

    case '404.html':
      socket.write(insertData('200 OK','text/html',error404));
      console.log(path)
      break;

  }



});







socket.end();



}).listen(8080)

function insertData(status,type,name){
  return "HTTP/1.1 ${status} OK\nServer: nginx/1.4.6 (Ubuntu)\n" + date + "\nContent-Type: ${type}; charset=utf-8Content-Length: 10\nConnection: keep-alive\n\n${name}"
}
