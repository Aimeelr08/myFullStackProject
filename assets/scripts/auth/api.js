'use strict';

const app = require('../app.js')
const signUp = function (data) {
  return $.ajax({
    url: app.host + '/sign-up',
    method: 'POST',
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
const ajaxDefaults = {
  url: 'https://aimeelr08.github.io/myFullStackProject/',

};

const myRequest = (data, success, fail) => {
  $.ajax(Object.assign({ method: 'POST', data }, ajaxDefaults))
  .done(success)
  .fail(fail);
};

let xhr = new XMLHttpRequest();
xhr.open("POST", "https://aimeelr08.github.io/myFullStackProject/", true);

// xhr.onreadystatechange = function() {
//   if (xhr.readyState == 4) {
//     // WARNING! Might be evaluating an evil script!
//     var resp = eval("(" + xhr.responseText + ")");
//
//   }
// }
xhr.send();


module.exports = {
  app,
  xhr,
  ajaxDefaults,
  myRequest,
  signUp,
  signIn,
  signOut,
  changePassword,
};
