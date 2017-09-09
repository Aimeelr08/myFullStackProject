'use strict';

// user require with a reference to bundle the file and use it in this file

// load manifests
let scripts = require('./assets/scripts/index.js');
let styles = require('./assets/styles/index.scss');

module.exports = {
  scripts,
  styles,

};
