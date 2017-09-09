'use strict';

// user require with a reference to bundle the file and use it in this file
 let example = require('./example');
 let user = require('./example');
// load manifests
let scripts = require('./assets/scripts/index.js');
let styles = require('./assets/styles/index.scss');

module.exports = {
  scripts,
  styles,
  example,
  user
};
