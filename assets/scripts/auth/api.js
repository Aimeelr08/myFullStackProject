'use strict';

const app = require('../app.js');


const signUp = function (data) {
  return $.ajaxSetup({
    url: app.host + '/sign-up',
    method: 'POST',
      // global: true,
    data: data,
  });
};

const signIn = function (data) {
  return $.ajax({
    url: app.host + '/sign-in',
    method: 'POST',
    data: data,
  });
};



const signOut = function () {
  return $.ajax({
    url: app.host + '/sign-out/' + app.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const changePassword = function (data) {
  return $.ajax({
    url: app.host + '/change-password/' + app.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

module.exports = {
  app,

  signUp,
  signIn,
  signOut,
  changePassword,
};
