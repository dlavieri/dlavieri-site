import React, { Component } from 'react';
import './navbar.css';

function NavBar (props) {
  return (
    <div className="nav-container">
      <div className="nav-bar">
        <div className="about-nav">
          <div className="logo">

          </div>
        </div>
        <div className="contact">
          <a href="#about-me">
            <div className="menu-item about">about</div></a>
          <a href="#work">
            <div className="menu-item work">work</div></a>
          <a href="#contact">
            <div className="menu-item contact-me">contact</div></a>
        </div>
      </div>
    </div>
  )
}

export default NavBar;
