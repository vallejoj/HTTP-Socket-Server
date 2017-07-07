// const net = require('net');
//
//
// var client = new net.Socket();
//
//
// client.connect(8080, "0.0.0.0", () => {
//   console.log('Connected successfully to ' + client.address().address);
// });
//
//
//
// client.on('data', (data) => {
//   process.stdout.write(data);
// });
//
//
// process.stdin.on('readable', () => {
//   var chunk = process.stdin.read();
//   if (chunk !== null) {
//     client.write(chunk);
//   }
// });
