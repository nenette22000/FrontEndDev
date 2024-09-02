import React from "react";
import "./Styles/SpecialsCards.css";
import { NavLink } from 'react-router-dom';
import GreekSalad from "../Components/Assets/greek-salad.jpg"
import Bruschetta from "../Components/Assets/bruschetta.jpg"
import VegetarianZiti from "../Components/Assets/vegetarian-ziti.jpg"
import DeliveryIcon from "../Components/Assets/delivery-icon.jpg"

const SpecialsCards = () =>{
    return (
      <div className="specials-container">
        <div className="greek-salad">
          <div className="image-container">
            <img alt="brightly lit image of a Greek salad" src= {GreekSalad}></img>
          </div>
          <div className="specials-card-name">
          <h3>Greek Salad</h3>
          <p className="price">$12.99</p>
          </div>
          <p>The famous Greek salad with crispy olives, peppers, cheese and fresh lemons.</p>
          <div className="delivery">
            <div className="order-delivery">
              <NavLink to ="/orderOnline">Order Delivery!</NavLink>
            </div>
            <div className="image-container-delivery">
              <img alt="person on a bike icon for delivery" src= {DeliveryIcon}></img>
            </div>
          </div>
        </div>
        <div className="bruschetta">
          <div className="image-container">
            <img alt="brightly lit image of a plate of Bruschetta" src= {Bruschetta}></img>
          </div>
      <div className="specials-card-name">
          <h3>Bruschetta</h3>
          <p className="price">$7.99</p>
        </div>
          <p>Our Bruchetta is made with grilled bread and brushed with olive oil, sea salt, and topped with fresh heirloom tomatoes.</p>
          <div className="delivery">
            <div className="order-delivery">
              <NavLink to ="/orderOnline">Order Delivery!</NavLink>
            </div>
            <div className="image-container-delivery">
              <img alt="person on a bike icon for delivery" src= {DeliveryIcon}></img>
            </div>
          </div>
        </div>
        <div className="veggie-ziti">
          <div className="image-container">
            <img alt="brightly lit image of a plate of Vegetarian Ziti" src= {VegetarianZiti}></img>
          </div>
      <div className="specials-card-name">
            <h3>Vegetarian Ziti</h3>
            <p className="price">$11.99</p>
          </div>
            <p>Freshly made ziti with a rich tomatoes and basil sauce topped with basil and our secret mediterranean spice blend.</p>
            <div className="delivery">
              <div className="order-delivery">
                <NavLink to ="/orderOnline">Order Delivery!</NavLink>
              </div>
              <div className="image-container-delivery">
                <img alt="person on a bike icon for delivery" src= {DeliveryIcon}></img>
              </div>
          </div>
        </div>
    </div>
        )
    };

export default SpecialsCards