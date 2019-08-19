var socketio = require('socket.io');

function sio(server) {

  var sio = socketio.listen(server);

  sio.sockets.on('connection', function(socket) {

    // clientからmassageを受信した時，
    socket.on('message',function(msg){
      console.log('message: ' + msg);
      sio.emit('message', msg);
    });

    // clientから切断された時，
    socket.on("disconnect", function() {
    });
  });
}

module.exports = sio;
