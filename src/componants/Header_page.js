import React, { useState, useEffect } from 'react'
import './Header.css';

export default function Header(props) {
  // Get current hour
  const hour = new Date().getHours();
  // Enable dark mode if time is 23 (11pm) to 4 (4am)
  const isNight = hour >= 23 || hour < 5;  
  const [darkMode, setDarkMode] = useState(isNight);

  // Set body class on mount and when darkMode changes
  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <header>
        <div className="logo">{props.title}</div>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
        <input
          type="checkbox"
          id="switch"
          checked={darkMode}
          onChange={handleToggle}
        />
        <label htmlFor="switch">Toggle</label>
        <a href="#signup" className="btn">Get Started</a>
      </header>
    </div>
  )
}
