import React from "react";
import "../Components/Styles/HeroSection.css";
import HeroImage from "../Components/Assets/food.jpeg"

import { Link } from "react-router-dom";

const HeroSection = () => {
    return (
        <div className="hero-container">
            <section className="hero-section">
                <div className="section-left">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <Link to="/Reservations"><button className="btn">Reserve a table</button></Link>
                </div>
                <div className="section-right">
                    <div className="image-box">
                        <img src={HeroImage} alt="Chef's hands are holding 3 tapas on a black stone plate."></img>
                    </div>
                </div>
            </section>
        </div>
        )}

export default HeroSection