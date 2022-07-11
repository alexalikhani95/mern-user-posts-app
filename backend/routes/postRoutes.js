const express = require("express");
const router = express.Router(); // Router instance - complete middleware and routing system

router.get("/", (req, res) => {
  res.send({ message: "Get Posts!" });
});

module.exports = router;
