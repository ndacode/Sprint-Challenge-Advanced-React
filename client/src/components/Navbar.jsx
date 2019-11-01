import React, { useState } from 'react';
import useDarkmode from './hooks/useDarkmode';

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkmode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Womens World Cup Rankings</h1>
      <div className="dark-mode__toggle"> 
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
      <h4>Dark Mode</h4>
    </nav>
  );
};

export default Navbar;