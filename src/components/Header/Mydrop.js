import React, { useState } from 'react';
// import './MobileNavbar.css'; // Add your own styling

const Mydrop = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="mobile-navbar">
      <button className="menu-button" onClick={toggleMenu}>
        Menu
      </button>
      {menuOpen && (
        <ul className="dropdown-menu">
          <li><a href="/">Home</a></li>
          <li>
            <a href="#">Dropdown 1</a>
            <ul className="sub-menu">
              <li><a href="#">Option 1</a></li>
              <li><a href="#">Option 2</a></li>
            </ul>
          </li>
          <li>
            <a href="#">Dropdown 2</a>
            <ul className="sub-menu">
              <li><a href="#">Option A</a></li>
              <li><a href="#">Option B</a></li>
            </ul>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Mydrop;
