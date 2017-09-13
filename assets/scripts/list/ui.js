 'use strict';
//  const app = require('../app.js');
const showPostsTemplate = require('../templates/Posts-listing.handlebars');
//
 const getPostsSuccess = () => {
let showPostsHtml = showPostsTemplate(data)({ posts: data.posts });
//   $('<td></td>').append(data);
 console.log(app.user);
  };
// //
// // //  const updatePostsSuccess = (data) => {
// // //   $('.content').add(data);
// // // };
// //
//  const failure = (error) => {
//   console.error(error);
// };
//
module.exports = {
 getPostsSuccess,
// //   // updatePostsSuccess,
//   failure,
// };
