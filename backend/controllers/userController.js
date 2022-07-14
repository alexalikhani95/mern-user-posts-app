const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// Register new user
// POST /api/users
const registerUser = asyncHandler(async (req, res) => {
  res.json({ message: "Register User" });
});

//Authenticate a user
// POST /api/users/login
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "Login user" });
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
