'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
// const router = require('../../../lib/set-api-origin');
const config = require('./config');

const authEvents = require('./auth/events.js');
// const listsEvents = require('./list/events.js');

// On document ready
$(() => {
  authEvents.addHandlers();
  // listsEvents.addHandlers();

  setAPIOrigin(location, config);
});

// use require with a reference to bundle the file and use it in this file
// const example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');

// require('../../lib/router.js');

 $('#sign-up').on('submit', authEvents.onSignUp);

//
