const express = require("express");
const router = express.Router(); // Router instance - complete middleware and routing system
const { getPosts, createPost, editPost, deletePost } = require("../controllers/postController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getPosts).post(protect, createPost);
router.route("/:id").delete(protect, deletePost).put(protect, editPost);

module.exports = router;
