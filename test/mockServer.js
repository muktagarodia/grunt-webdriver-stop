var portfinder = require('portfinder');
var http = require('http');// https://nodejs.org/docs/v0.10.35/api/http.html#http_class_http_server
var util = require('util');

function bindEvent(obj, event){
  obj.on('event', function(){ console.log('got ' + event)});
}

function MockServer(){

  var me = this;

  me.connect = function(){

    portfinder.getPort(function (err, port) {
      console.log('listening on port', port);
      me.server = http.createServer(function(req, res){
        console.log('mockServer:: ',req.url);
        me.lastRequest = req;
        res.end('ok');
      });

      bindEvent(me.server,'request');
      bindEvent(me.server,'close');
      bindEvent(me.server,'clientError');
      //bindEvent(me.server,'request');

      me.server.listen(port, function(){
        me.emit('connected',port);
      });



    });

  };


}

util.inherits(MockServer, require('events').EventEmitter);


module.exports = MockServer;


if (require.main === module) {
  new MockServer().connect();
}
