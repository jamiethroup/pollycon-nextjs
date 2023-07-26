// MobileMenu.js
import React, { useState } from 'react';

const MobileMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="mobile-menu">
      <button className="menu-toggle" onClick={toggleMenu}>
        Menu
      </button>
      {isMenuOpen && (
        <ul className="menu-items">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      )}
    </div>
  );
};

export default MobileMenu;