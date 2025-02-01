import React from 'react';
import '../css/Header.css'; 
import useScrollTo from '../hooks/useScrollTo'

function Header() {
  
  const handleClick = useScrollTo();

  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="#home" onClick={(e) => handleClick(e, 'home')}>Home</a> </li>
          <li><a href="#about" onClick={(e) => handleClick(e, 'about')}>About</a></li>
          <li><a href='#resume' onClick={(e)=> handleClick(e, 'resume')}>Resume</a> </li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
