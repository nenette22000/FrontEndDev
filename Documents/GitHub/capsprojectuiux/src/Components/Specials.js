import React from "react";
import "./Styles/Specials.css";
import { NavLink } from 'react-router-dom';
import SpecialsCards from "./SpecialsCards";

const Specials = () =>{
    return (
  <div>
    <section className="specials">
        <div className="specials-header">
          <h1>This Week's Specials!</h1>
          <NavLink to="/OrderOnline"><button className="btn">Online Menu</button></NavLink>
        </div>
      <div>
      <SpecialsCards></SpecialsCards>
      </div>
    </section>
  </div>
    )
};

export default Specials