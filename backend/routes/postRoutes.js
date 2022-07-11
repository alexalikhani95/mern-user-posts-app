const express = require("express");
const router = express.Router(); // Router instance - complete middleware and routing system
const { getPosts, createPost, editPost, deletePost } = require("../controllers/postController");

router.get("/", getPosts);

router.post("/", createPost);

router.put("/:id", editPost);

router.delete("/:id", deletePost);

module.exports = router;
