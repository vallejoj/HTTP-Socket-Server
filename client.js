const net = require('net');


const client = new net.Socket();
const host = process.argv[2].split("/").splice(0,1);
const date = new Date()
var paths =  process.argv[2].split("/").pop();
console.log("path:", paths)


var connectionParams = {port:80, host: host.toString()};

console.log('My params:', connectionParams);

client.connect( connectionParams, () => {
  console.log('Connected successfully to ' + client.address().address);
  // client.write(paths);
});


  client.write(`GET /${paths} HTTP/1.1
Host: ${client.remoteAddress}
Accept: text/html, text/css, application/json
Date: {$date}
User-Agent: joshi
Connection: close\r\n\r\n`);

client.on('data', (data) => {
  process.stdout.write(data.toString());
});
