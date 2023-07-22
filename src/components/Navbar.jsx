import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logoItemContainer">
        <h2>Bookstore CMS</h2>
        <div className="navItemContainer">
          <Link to="/">Books</Link>
          <Link to="/categories">Categories</Link>
        </div>
      </div>
      <FontAwesomeIcon icon={faUser} />
    </nav>
  );
}

export default Navbar;
