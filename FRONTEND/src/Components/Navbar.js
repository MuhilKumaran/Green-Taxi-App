import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/navbarStyle.css";

const Navbar = ({ loggedIn, setLoggedIn }) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const closeNavbar = () => {
    setIsNavCollapsed(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    window.location.href = "/login";
    closeNavbar();
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-md navbar-dark"
        style={{ backgroundColor: "#41b31d" }}
        // style={{ backgroundColor: "#0C7073" }}
      >
        <div className="container">
          <h2 style={{ color: "snow" }}>Green Taxi</h2>
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleNavCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${
              isNavCollapsed ? "" : "show"
            }`}
            id="myNavBar"
          >
            <ul className="navbar-nav ms-auto nav-list" style={{ gap: "5px" }}>
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link nav-text"
                  onClick={closeNavbar}
                  style={{ color: "snow" }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/booking"
                  className="nav-link nav-text"
                  onClick={closeNavbar}
                  style={{ color: "snow" }}
                >
                  Booking
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className="nav-link nav-text"
                  onClick={closeNavbar}
                  style={{ color: "snow" }}
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/support"
                  className="nav-link nav-text"
                  onClick={closeNavbar}
                  style={{ color: "snow" }}
                >
                  Support
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/aboutus"
                  className="nav-link nav-text"
                  onClick={closeNavbar}
                  style={{ color: "snow" }}
                >
                  About US
                </Link>
              </li>
              {!loggedIn ? (
                <li className="nav-item">
                  <Link
                    to="/signup"
                    className="nav-link nav-text"
                    onClick={closeNavbar}
                    style={{ color: "snow" }}
                  >
                    Sign Up/Login
                  </Link>
                </li>
              ) : (
                <li className="nav-item">
                  <Link
                    to="#"
                    className="nav-link nav-text"
                    onClick={(e) => {
                      e.preventDefault(); // Prevent navigation
                      handleLogout(); // Call the logout function
                    }}
                    style={{ color: "snow" }}
                  >
                    Logout
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
