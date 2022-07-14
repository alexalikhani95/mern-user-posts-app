// Register new user
// POST /api/users

const registerUser = (req, res) => {
  res.json({ message: "Register User" });
};

//Authenticate a user
// POST /api/users/login
const loginUser = (req, res) => {
  res.json({ message: "Login user" });
};

// Get user data
// GET /api/users/me
const getMe = (req, res) => {
  res.json({ message: "User data display" });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
