import React from "react";
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import { NavLink } from 'react-router-dom'
import LenuuImage from "../Components/Lenuu";
import Tacos from "../Components/Assets/tacos.jpg"
import Burritos from "../Components/Assets/burrito.JPG"
import Salad from "../Components/Assets/Salad1.jpg"
import Fish from "../Components/Assets/smoked-fish.jpg"
import Burger from "../Components/Assets/burger1.jpg"







const Menu = () => {
    return (
        <><div>
            <Header />
            <h1>Menu</h1>

        </div><div class="menu-container">
                <div class="section">
                    <h3 class="meal-type">Tacos</h3>
                    <div class="text-center">
                        <img src = { Tacos } alt = "tacos " />
                    </div>

                    <div class="item-name">
                        <div class="label">Carne Asada</div>
                        <b class="low">$10</b>
                        <div class="description">Un taco bien perron y sabroso.</div>
                    </div>

                    <div class="item-name">
                        <div class="label">Al Pastor</div>
                        <b>$10</b>
                        <div class="description"> Un taco bien perron y sabroso.</div>
                    </div>

                    <div class="item-name">
                        <div class="label">Cabeza</div>
                        <b class="low">$10</b>
                        <div class="description">Un taco bien perron y sabroso.</div>
                    </div>

                    <div class="item-name">
                        <div class="label">Lengua</div>
                        <b>$10</b>
                        <div class="description">Un taco bien perron y sabroso.</div>
                    </div>
                </div>

                <div class="section">
                    <h3 class="meal-type">Burritos</h3>
                    <div class="text-center">
                        <img src = { Burritos } alt = "burritos" />
                    </div>

                    <div class="item-name">
                        <div class="label">Chicken</div>
                        <b>$12</b>
                        <div class="description">Un burrito bien perron y sabroso.</div>
                    </div>

                    <div class="item-name">
                        <div class="label">Bean and Cheese</div>
                        <b>$12</b>
                        <div class="description">Un burrito bien perron y sabroso.</div>
                    </div>

                    <div class="item-name">
                        <div class="label">Veggie</div>
                        <b>$12</b>
                        <div class="description">Un burrito bien perron y sabroso.</div>
                    </div>
                </div>

                <div class="section">
                    <h3 class="meal-type">Salad</h3>
                    <div class="text-center">
                        <img src = { Salad } alt = "greek salad" />
                    </div>

                    <div class="item-name">
                        <div class="label"> name </div>
                        <b>price</b>
                        <div class="description"> description </div>
                    </div>

                    <div class="item-name">
                        <div class="label"> name </div>
                        <b>price</b>
                        <div class="description"> description </div>
                    </div>

                    <div class="item-name">
                        <div class="label"> name </div>
                        <b>price</b>
                        <div class="description"> description </div>
                    </div>
                </div>

                <div class="section">
                    <h3 class="meal-type">Fish</h3>
                    <div class="text-center">
                        <img src = { Fish } alt = "smoked fish" />
                    </div>

                    <div class="item-name">
                        <div class="label"> name </div>
                        <b>price</b>
                        <div class="description"> description </div>
                    </div>

                    <div class="item-name">
                        <div class="label"> name </div>
                        <b>price</b>
                        <div class="description"> description </div>
                    </div>

                    <div class="item-name">
                        <div class="label"> name </div>
                        <b>price</b>
                        <div class="description"> description </div>
                    </div>
                </div>

                <div class="section">
                    <h3 class="meal-type">Burger</h3>
                    <div class="text-center">
                        <img src = { Burger } alt = "burger with fries" />
                    </div>

                    <div class="item-name">
                        <div class="label"> name </div>
                        <b>price</b>
                        <div class="description"> description </div>
                    </div>

                    <div class="item-name">
                        <div class="label"> name </div>
                        <b>price</b>
                        <div class="description"> description </div>
                    </div>

                    <div class="item-name">
                        <div class="label"> name </div>
                        <b>price</b>
                        <div class="description"> description </div>
                    </div>
                </div>

            </div>
            <Footer /></>

    )
}
    export default Menu;