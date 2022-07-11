const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 8000;

const app = express();

app.use("/api/posts", require("./routes/postRoutes"));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
