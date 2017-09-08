'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');

const onSignUp = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signUp(data)
  .then(ui.success)
  .catch(ui.failure);
};

const onSignIn = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signIn(data)
  .then(ui.signInSuccess)
  .catch(ui.failure);
};

const onSignOut = (event) => {
  event.preventDefault();
  api.signOut()
  .then(ui.signOutSuccess)
  .catch(ui.failure);
};

const onChangePassword = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.changePassword(data)
  .then(ui.success)
  .catch(ui.failure);

};



$(() => {

  $('#form').on('submit', function (e) {
    let data = getFormFields(this);
    e.preventDefault();
    api.myRequest(data, ui.success, ui.failure);
  });
});


const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#sign-out').on('submit', onSignOut);
  $('#change-password').on('submit', onChangePassword);
};

module.exports = {
  request,
  addHandlers,
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword
};
