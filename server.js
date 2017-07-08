const net = require('net');
const fs = require('fs');
const date = new Date()

const error404 = fs.readFileSync('./public/404.html');
const helium = fs.readFileSync('./public/helium.html');
const hydrogen = fs.readFileSync('./public/hydrogen.html');
const index = fs.readFileSync('./public/index.html');
const styles= fs.readFileSync('./public/css/styles.css')

const server = net.createServer( (socket) => {


      socket.on('data', (data) => {
          const myData = data.toString().split('\n');
          const myArray = myData[0].split(' ');
          const path = myArray[1];
          console.log("yo" + myArray);

          switch (path) {

            case '/':
              socket.write(insertData('200 OK', 'text/html', index));
              socket.end();

                break;

            case '/helium.html':
              socket.write(insertData('200 OK', 'text/html', helium));
              socket.end();

              break;

            case '/hydrogen.html':
              socket.write(insertData('200 OK', 'text/html', hydrogen));
              socket.end();

              break;

            case '/css/styles.css':
             socket.write(insertData('200 OK', 'text/css', styles));
            socket.end();
             break;
            default:
              socket.write(insertData('404', 'text/html', error404));
              socket.end();
              }

          });

      }).listen(8080)

    function insertData(status, type, name) {
      return `HTTP/1.1 ${status}\nServer: nginx/1.4.6 (Ubuntu)\n${date}\nContent-Type: ${type}; charset=utf-8Content-Length:${name.length}\nConnection: keep-alive\n\n${name}`
    }
