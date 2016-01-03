# webdriver_stop

> a plugin top stop webdriver. completes plugin https://github.com/webdriverio/grunt-webdriver which is used to start webdriver.
 
 

webdriver_stop allows you to use grunt-webdriver `keepAlive:true` option, and kill the webdriver at a later stage.
 
this has potential benefit for performance when running tests in suites or in parallel, reusing the same webdriver process, while making sure the process will not self destruct beforehand. 

## Getting Started

This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install webdriver_stop --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('webdriver_stop');
```

## The "webdriver_stop" task

### Overview

In your project's Gruntfile, add a section named `webdriver_stop` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  webdriver_stop: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.endpoint
Type: `String`
Default value: `'http://localhost:4444'`

webdriver's endpoint to kill.


### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  webdriver_stop: {
  },
})
```

#### Custom Options
In this example, custom options are used to do something else with whatever else. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result in this case would be `Testing: 1 2 3 !!!`

```js
grunt.initConfig({
  webdriver_stop: {
    options: {
      endpoint: 'http://10.10.1.10:8080/
    }
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## How to release

This project uses semantic-release-cli. 

video is found at: https://egghead.io/lessons/javascript-how-to-write-a-javascript-library-automating-releases-with-semantic-release

in ubuntu you sometimes need to run `sudo apt-get install libgnome-keyring-dev` if installation is broken. 

## Release History
_(Nothing yet)_

## License
Copyright (c) 2016 . Licensed under the MIT license.


