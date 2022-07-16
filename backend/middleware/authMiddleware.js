const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  //authorisation object from the headers
  //check if it starts with a bearer - when the token is sent in the authorisation headers, it should start with bearer
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      // Turn into an array where the text 'bearer' is the first item and token is the second item
      token = req.headers.authorization.split(" ")[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from the id that's in the token (-password ensures the apssword is not included)
      req.user = await User.findById(decoded.id).select("-password");

      next(); // Call the next piece of middleware
    } catch (error) {
      console.log(error);
      res.status(401); // Not authorized
      throw new Error("Not authorized");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

module.exports = { protect };
