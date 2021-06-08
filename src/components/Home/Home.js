import React from "react";
import "../../scss/main.scss";
import "../Home/Home.scss";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeHeroImg from "../../assets/assets/Home-Hero-Image.jpg";
import SimpleSteps from "../Home/SimpleSteps";
import AboutUs from "../Home/AboutUs";
import WhoWeHelp from "../Home/WhoWeHelp";
import ContactForm from "../Home/ContactForm"

const Home = () => {
    return (
        <div className="home-page">
            <HomeHeader/>
            <HomeThreeColumns />
            <SimpleSteps />
            <AboutUs />
            <WhoWeHelp />
            <ContactForm />

        </div>
  

    )
}

export default Home