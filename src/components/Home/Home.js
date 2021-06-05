import React from "react";
import "../../scss/main.scss";
import "../Home/Home.scss"
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns"
import HomeHeroImg from "../../assets/assets/Home-Hero-Image.jpg"

 const Home = () => {
    return (
        <div className="home-page">
            <HomeHeader/>
            <HomeThreeColumns />
        </div>
  

    )
}

export default Home