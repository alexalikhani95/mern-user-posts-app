const express = require("express");
const router = express.Router(); // Router instance - complete middleware and routing system
const { getPosts, createPost, editPost, deletePost } = require("../controllers/postController");

router.route("/").get(getPosts).post(createPost);
router.route("/:id").delete(deletePost).put(editPost);

module.exports = router;
