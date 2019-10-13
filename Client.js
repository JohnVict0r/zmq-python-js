//
// Client.js
//
const zmq = require('zeromq');

// socket to talk to server
console.log("Connecting to hello world server…");
const requester = zmq.socket('req');

let x = 0;
requester.on("message", function(reply) {
  console.log("Received reply", x, ": [", reply.toString(), ']');
  x += 1;
  requester.send("atualize");
});

requester.connect("tcp://localhost:5555");

// Start
requester.send("Hello");

// for (var i = 0; i < 10; i++) {
//   console.log("Sending request", i, '…');
//   requester.send("Hello");
// }

// process.on('SIGINT', function() {
//   requester.close();
// });