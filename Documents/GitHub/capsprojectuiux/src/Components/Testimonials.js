import React from "react";
import "../Components/Styles/Testimonials.css"

import LemonRatingFour from "../Components/Assets/lemon-rating-4.png"
import LemonRatingThreePointFive from "../Components/Assets/lemon-rating-3.5.png"
import LemonRatingFive from "../Components/Assets/lemon-rating-5.png"

import Leone from "../Components/Assets/Leone.jpg"
import Maria from "../Components/Assets/Maria.jpg"
import Carol from "../Components/Assets/Carol.jpg"
import Dimitri from "../Components/Assets/dimitri.jpg"

const Testimonials = () => {
    return(
<div className="testimonials-container">
        <div className="testimonials-header">
            <h1>Testimonials</h1>
        </div>
    <section className="testimonials">
        <div className="review-container">
            <div className="rating-container">
                <h2>Rating</h2>
                <img alt="4-star rating of Little Lemon, but instead of using stars, the icon is a lemon" src={LemonRatingFour}></img>
            </div>
            <div className="image-container">
                <img alt="A man with black hair and a black t-shirt" src={Leone}></img>
            </div>
            <h2>Leone</h2>
            <p>“Great date spot! My wife and I really enjoyed the atmosphere.”</p>
        </div>
        <div className="review-container">
            <div className="rating-container">
                <h2>Rating</h2>
                <img alt="3.5-star rating of Little Lemon, but instead of using stars, the icon is a lemon" src={LemonRatingThreePointFive}></img>
            </div>
            <div className="image-container">
                <img alt="A woman with black curly hair and a light blue shirt" src={Maria}></img>
            </div>
            <h2>Maria</h2>
            <p>“Had a good time here with my family. Service was fast.”</p>
        </div>
        <div className="review-container">
            <div className="rating-container">
                <h2>Rating</h2>
                <img alt="5-star rating of Little Lemon, but instead of using stars, the icon is a lemon" src={LemonRatingFive}></img>
            </div>
            <div className="image-container">
                <img alt="A woman with bright red hair and a black puffer jacket" src={Carol}></img>
            </div>
            <h2>Carol</h2>
            <p>“Best Mediterranean food in Chicago!”</p>
        </div>
        <div className="review-container">
            <div className="rating-container">
                <h2>Rating</h2>
                <img alt="4-star rating of Little Lemon, but instead of using stars, the icon is a lemon" src={LemonRatingFour}></img>
            </div>
            <div className="image-container">
                <img alt="A man with brown hair crossing his arms and smiling" src={Dimitri}></img>
            </div>
            <h2>Dimitri</h2>
            <p>“My coworkers and I like grabbing a quick lunch here.”</p>
        </div>
    </section>
</div>
)
};

export default Testimonials;