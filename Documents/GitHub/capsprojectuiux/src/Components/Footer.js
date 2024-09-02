import React from "react";
import "../Components/Styles/Footer.css"
import { NavLink } from 'react-router-dom';
import Logo from "../Components/Assets/little-lemon-logo.jpg"

const Footer = () => {
    return(
<footer>
    <div className="footer-container">
        <div>
            <NavLink to = "/">
                <div className="logo">
                <img src = { Logo } alt = "Little Lemon logo" />
                </div>
            </NavLink>
            </div>
        <nav className="nav-content">
            <ul className="footer-navigation">
                <p>Navigation</p>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to ="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to ="/menu">Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to ="/reservations">Reservations</NavLink>
                    </li>
                    <li>
                        <NavLink to ="/orderOnline">Order Online</NavLink>
                    </li>
                    <li>
                        <NavLink to ="/login">Login</NavLink>
                    </li>
            </ul>
            <ul className = "contact">
                <p>Contact</p>
                    <li>123 Numbers St. MainStreet Providence, RI</li>
                    <li>(401)-456-7890</li>
                    <li>littlelemon401@mail.com</li>
                    <li>Facebook</li>
                    <li>Instagram</li>
            </ul>
            <ul className= "hours">
                <p>Hours</p>
                    <li>Mon - Wed: 11:00AM - 6:00PM</li>
                    <li>Fri: 12:00PM - 11:00PM</li>
                    <li>Sat - Sun: 10:30AM - 11:00PM</li>
            </ul>
        </nav>
    </div>
        <div className="copywright">
            <ul>
                <p>© 2024 Little Lemon Ltd. All rights reserved</p>
            </ul>
        </div>
</footer>
    );
}

export default Footer