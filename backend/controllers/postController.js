// Get posts
// Route - GET api/posts
const getPosts = (req, res) => {
  res.status(200).json({ message: "Get posts" });
};

// Create post
// route - POST /api/posts
const createPost = (req, res) => {
  // If no body text, create a bad request status
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(200).json({ message: "Create Posts" });
};

// Edit post
// Route - PUT /api/posts/:id
const editPost = (req, res) => {
  res.status(200).json({ message: `Edit post ${req.params.id}` });
};

// delete post
// route - DELETE /api/posts/:id
const deletePost = (req, res) => {
  res.status(200).json({ message: `Delete post ${req.params.id}` });
};

module.exports = {
  getPosts,
  createPost,
  editPost,
  deletePost,
};
