import React from "react";
import "../Components/Styles/Footer.css"
import { NavLink } from 'react-router-dom'
import LenuuImage from "../Components/Assets/menu2.jpeg";


const Lenuu = () => {
    return (
        <lenuu>
            <div className="lenuu-container">
                <div>
                    <NavLink to="/">
                        <div className="logo">
                            <img src={ LenuuImage } alt="Menu item" />
                        </div>
                    </NavLink>
                </div>
            </div>

        </lenuu>
    );
}

export default Lenuu

