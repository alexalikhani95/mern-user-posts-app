const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 8000;

const app = express();

app.get("/api/posts", (req, res) => {
  res.send({ message: "Get Posts!" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
