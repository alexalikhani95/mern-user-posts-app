//Using async handler to avoid using try/catches and just use the err handlers
const asyncHandler = require("express-async-handler");

const Post = require("../models/postModel");

// Get posts
// Route - GET api/posts
const getPosts = asyncHandler(async (req, res) => {
  //Using async with the postcontroller functions as a promise will be sent when mongoose is used with the post controller functions.
  const posts = await Post.find();

  res.status(200).json(posts);
});

// Create post
// route - POST /api/posts
const createPost = asyncHandler(async (req, res) => {
  // If no body text, create a bad request status
  if (!req.body.text) {
    // If no body text, create a bad request status
    res.status(400);
    throw new Error("Please add a text field");
  }

  const post = await Post.create({
    text: req.body.text,
  });

  res.status(200).json(post);
});

// Edit post
// Route - PUT /api/posts/:id
const editPost = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Edit post ${req.params.id}` });
});

// delete post
// route - DELETE /api/posts/:id
const deletePost = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete post ${req.params.id}` });
});

module.exports = {
  getPosts,
  createPost,
  editPost,
  deletePost,
};
