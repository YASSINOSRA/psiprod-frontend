import React from 'react';
import socialIcons from '../assets/Isolation_Mode.png';
import logo from '../assets/Layer_1.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="containerfooter">
        <img src={socialIcons} alt="Social Icons" className="left-image" />
        <img src={logo} alt="Company Logo" className="right-image" />
      </div>
    </footer>
  );
}

export default Footer;
