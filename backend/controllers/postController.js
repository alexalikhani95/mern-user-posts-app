// Get posts
// Route - GET api/posts
const getPosts = (req, res) => {
  res.send({ message: "Get posts" });
};

// Create post
// route - POST /api/posts
const createPost = (req, res) => {
  console.log(req.body);
  res.send({ message: "Create posts" });
};

// Edit post
// Route - PUT /api/posts/:id
const editPost = (req, res) => {
  res.send({ message: `Edit post ${req.params.id}` });
};

// delete post
// route - DELETE /api/posts/:id
const deletePost = (req, res) => {
  res.send({ message: `Delete post ${req.params.id}` });
};

module.exports = {
  getPosts,
  createPost,
  editPost,
  deletePost,
};
