'use strict';

var request = require('request');
var grunt = require('grunt');

exports.stop = function( options, done ){
  request( { 'url' : options.endpoint + '/selenium-server/driver/?cmd=shutDownSeleniumServer' }, function( err, data ){
    //console.log('got response', err,data);
    if ( data && data.body === options.expectResponse){
      grunt.log.ok('selenium stopped');
    }else{
      grunt.log.ok('did not get a response. assuming already dead.');
    }
    done();
  });
};
