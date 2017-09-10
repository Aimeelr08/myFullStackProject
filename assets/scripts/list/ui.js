'use strict';

const showPostsTemplate = require('../templates/Posts-listing.handlebars');

const getPostsSuccess = (data) => {
  console.log(data);
  let showPostsHtml = showPostsTemplate({ posts: data.posts });
  $('.content').append(showPostsHtml);
};

const clearPosts = () => {
  $('.content').empty();
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  getPostsSuccess,
  clearPosts,
  failure,
};
