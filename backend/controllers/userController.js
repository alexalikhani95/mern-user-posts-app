const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// Register new user
// POST /api/users
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body; // The body data from when a request is made to create a user

  if (!name || !email || !password) {
    res.status(400); // bad request if no name, email or password
    throw new Error("Please add all fields");
  }

  const userExists = await User.findOne({ email }); // Find the user by the email passed in

  if (userExists) {
    res.status(400);
    throw new Error("USer already exists");
  }

  // Hash the password
  const salt = await bcrypt.genSalt(10); // A salt needs to be generated to has password (bcrypt method). 10 here is the number of rounds

  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    // If the user is now created
    res.status(201).json({
      // created status
      _id: user.id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

//Authenticate a user
// POST /api/users/login
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body; // Get the email and password sent from the body

  // Check for user email
  const user = await User.findOne({ email });

  // Compare the plain text password with the hashed password using bcrypt
  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

// Get user data
// GET /api/users/me
const getMe = asyncHandler(async (req, res) => {
  res.json({ message: "User data display" });
});

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
