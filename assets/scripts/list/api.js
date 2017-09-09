'use strict';


const app = require('../app.js');

let getLists = function () {
  return $.ajax({
    url: app.host + '/books', // "http://book-json.herokuapp.com/books"
    method: 'GET',
  });
};

let deleteLists = function () {
  return $.ajax({
    url: app.host + '/books', // "http://book-json.herokuapp.com/books"
    method: 'DELETE',
  });
};
module.exports = {
  getBooks,
  deleteBook,

};
