const net = require('net');


var client = new net.Socket();
var host = process.argv[2];
client.connect(80, host.toString(), () => {
  console.log('Connected successfully to ' + client.address().address);
});

process.argv.forEach((val, index) => {
  console.log( `${index}: ${val}`);
});

  client.write(`GET / HTTP/1.1
Host: ${client.remoteAddress}
Connection: close\r\n\r\n`);

client.on('data', (data) => {
  process.stdout.write(data.toString());
});
