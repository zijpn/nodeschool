var net = require('net');

function accept(socket) {
  var date = new Date();
  var datestr = date.getFullYear() + '-'
              + ('0' + (date.getMonth() + 1)).slice(-2) + '-'
              + ('0' + date.getDate()).slice(-2) + ' '
              + ('0' + date.getHours()).slice(-2) + ':'
              + ('0' + date.getMinutes()).slice(-2) + '\n';
  socket.write(datestr);
  socket.end(); // close socket
}

var server = net.createServer(accept);
server.listen(process.argv[2]);
