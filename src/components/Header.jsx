import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./css/header.css";
import { useSearch } from "./SearchContext";

const Header = () => {
  const { updateSearchQuery } = useSearch();
  const [searchQuery, setSearchQuery] = useState("");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  // Handle search input changes
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    updateSearchQuery(e.target.value);
  };

  // Perform search action
  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      navigate(`/products?search=${searchQuery}`);
    }
  };

  // Handle "Enter" key press for search
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  // Handle user logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/" className="logo-link">
          Zeekko
        </NavLink>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
          onKeyDown={handleKeyPress} // Fixed deprecated onKeyPress
        />
        <button className="search-icon" onClick={handleSearch} aria-label="Search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.742a6.5 6.5 0 1 0-1.415 1.415l3.581 3.58a1 1 0 0 0 1.415-1.415l-3.58-3.58zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </button>
      </div>

      {/* Navigation */}
      <nav className="navbar">
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className={({ isActive }) => (isActive ? "active" : "")}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
              Contact
            </NavLink>
          </li>

          {/* Profile/Login */}
          <li>
            {token ? (
              <NavLink to="/profile" className={({ isActive }) => (isActive ? "active" : "")}>
                <span className="material-icons">person</span>
                <span className="profile-text">Profile</span>
              </NavLink>
            ) : (
              <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "")}>
                <span className="material-icons">login</span>
              </NavLink>
            )}
          </li>


        </ul>
      </nav>
    </header>
  );
};

export default Header;
