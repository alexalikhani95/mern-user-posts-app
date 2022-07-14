const express = require("express");
const router = express.Router(); // Router instance - complete middleware and routing system
const { registerUser, loginUser, getMe } = require("../controllers/userController");

router.post("/registerUser", registerUser); // When a post request is made to /api/users (add a user)
router.post("/login", loginUser);
router.get("/me", getMe);

module.exports = router;
