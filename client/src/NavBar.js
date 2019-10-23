import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
        <ol>
            <p><NavLink to="/">Suggested Topic</NavLink></p>
            <p><NavLink to="/dream_form">Dream Input</NavLink></p>
            <p><NavLink to="/comment_form">Comments Input</NavLink></p>
            <p><NavLink to="/about">About</NavLink></p>
        </ol>
    </div>
  );
};

export default NavBar;