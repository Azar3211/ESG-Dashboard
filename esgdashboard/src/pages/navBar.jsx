import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <a to="/">Home</a>
                </li>
                <li className="navbar-item">
                    <a to="/about">About</a>
                </li>
                <li className="navbar-item">
                    <a to="/services">Services</a>
                </li>
                <li className="navbar-item">
                    <a to="/contact">Contact</a>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;