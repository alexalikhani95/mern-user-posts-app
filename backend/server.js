const express = require("express");
const { errorHandler } = require("./middleware/errorMiddleware");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const PORT = process.env.PORT || 8000;

connectDB();

const app = express();

app.use(express.json()); // body parser for raw json
app.use(express.urlencoded({ extended: false })); // built-in middleware function in Express. It parses incoming requests with urlencoded payloads and is based on body-parser.

app.use("/api/posts", require("./routes/postRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
