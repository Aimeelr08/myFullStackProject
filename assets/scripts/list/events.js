// 'use strict';
//
// const api = require('./api.js');
// const ui = require('./ui.js');
//
//
// const onGetBooks = (event) => {
//   event.preventDefault();
//   api.getBooks()
//     .then(ui.getBooksSuccess)
//     .catch(ui.failure);
// };
//
// const onClearBooks = (event) => {
//   event.preventDefault();
//   ui.clearBooks();
//   .then(ui.clearBooksSuccess)
//     .catch(ui.failure);
// };
//
// const onUpdateBook = (event) => {
//   event.preventDefault();
//   ui.updateBook();
//   .then(ui.updateBookSuccess)
//     .catch(ui.failure);
// };
// const onDeleteBook = (event) => {
//   event.preventDefault();
//   ui.deleteBook();
//   .then(ui.deleteBookSuccess)
//     .catch(ui.failure);
// };
//
// const addHandlers = () => {
//
//   $('#getBooksButton').hide()
//   $('#clearBooksButton').hide()
//   $('#updateBookButton').hide()
//   $('#deleteBookButton').hide()
// };
//
// module.exports = {
//   addHandlers,
//   defaultSetting,
// };
