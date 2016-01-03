/*
 * webdriver_stop
 *
 *
 * Copyright (c) 2016
 * Licensed under the MIT license.
 */

'use strict';

var request = require('request');
var stop_webdriver = require('../lib/stop_webdriver');

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('webdriver_stop', 'a plugin top stop webdrvier', function () {

    var done = this.async();
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      endpoint: 'http://localhost:4444',
      expectResponse: 'OKOK'
    });

    grunt.log.ok('endpoint is ' + options.endpoint);
    stop_webdriver.stop(options, done);

  });

};
