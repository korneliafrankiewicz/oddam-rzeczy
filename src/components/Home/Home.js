import React from "react";
import "../../scss/main.scss";
import "../Home/Home.scss"
import {HomeHeader} from "./HomeHeader";
import HomeHeroImg from "../../assets/assets/Home-Hero-Image.jpg"

export const Home = () => {
    return (
        <>
        <div className="home_page">
            <div className="home_page-left_side"></div>
            <div className="home_page-right_side">
                <HomeHeader/>
            </div>
        </div>
        </>
    )
}