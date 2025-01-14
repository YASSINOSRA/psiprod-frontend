import React, { useState } from 'react';
import logo from '../assets/Layer_1.png';

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      <div className="language-switcher">
        <button>English</button>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`navbar-menu ${menuActive ? 'active' : ''}`}>
        <li><a href="#about">نبذة عنا</a></li>
        <li><a href="#services">خدماتنا</a></li>
        <li><a href="#team">فريقنا</a></li>
        <li><a href="#contact">تواصل معنا</a></li>
      </ul>
      <img src={logo} alt="Company Logo" className="right-image" />
    </nav>
  );
}

export default Navbar;
