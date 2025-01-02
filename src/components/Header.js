import React from 'react';
import './Header.css'; // This is for styling the header

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <h1 className="logo">My Resume</h1>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
