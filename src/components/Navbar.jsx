import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="panel-bg">
      <div className="logoItemContainer">
        <h2 className="Bookstore-CMS">Bookstore CMS</h2>
        <div className="navItemContainer">
          <Link to="/" className="BOOKS">BOOKS</Link>
          <Link to="/categories" className="CATEGORIES">CATEGORIES</Link>
        </div>
      </div>
      <FontAwesomeIcon icon={faUser} className="user-icon" />
    </nav>
  );
}

export default Navbar;
