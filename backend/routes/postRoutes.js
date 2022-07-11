const express = require("express");
const router = express.Router(); // Router instance - complete middleware and routing system

router.get("/", (req, res) => {
  res.send({ message: "Get Posts!" });
});

router.post("/", (req, res) => {
  res.send({ message: "Create posts" });
});

router.put("/:id", (req, res) => {
  res.send({ message: `Update post ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res.send({ message: `Update post ${req.params.id}` });
});

module.exports = router;
