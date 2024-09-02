import React from "react";
import "../Components/Styles/AboutHome.css"
import AdrianAndMario from "../Components/Assets/adrian-and-mario.png"

const AboutHome = () => {
    return(
<section className="about">
        <div className="text-container">
            <h1>Little Lemon</h1>
            <h2>About</h2>
            <p>Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario. Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago,  and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers continue to oversee the Little Lemon restaurant, nearly thirty years later.</p>
        </div>
        <div>
            <img alt="Two brothers, Adrian and Mario stand behind a wooden kitchen counter" src={AdrianAndMario}></img>
        </div>
</section>
    )
}

export default AboutHome;