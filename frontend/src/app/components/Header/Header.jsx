import React from "react";
import { Link } from "react-router-dom";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="Diary">
        <Link to="/">Diary</Link>
      </div>
      <Link to="/login">
        <FaSignInAlt /> Login
      </Link>
      <Link to="/register">
        <FaUser /> Register
      </Link>
    </div>
  );
};

export default Header;
