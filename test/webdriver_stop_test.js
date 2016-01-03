'use strict';

var expect = require('expect.js');
var MockServer = require('./mockServer');
var request = require('request');
var stop_webdriver = require('../lib/stop_webdriver');


var mockServer = null;
var port;


beforeEach(function(done){
  mockServer = new MockServer();
  mockServer.once('connected', function (_port) {
    port = _port;
    done();
  });
  mockServer.connect();
});

describe('webdriver_stop grunt plugin', function () {
  it('should call endpoint', function (done) {
    stop_webdriver.stop({ endpoint: 'http://localhost:' + port, expectResponse: 'ok' }, function(){
      expect(mockServer.lastRequest.url).to.be('/selenium-server/driver/?cmd=shutDownSeleniumServer');
      done();
    });
  });
});

