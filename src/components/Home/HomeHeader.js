import React from "react";
import "../../scss/main.scss";
import Navigation from "./Navigation";
import HeaderTitle from "./HeaderTitle"
import HomeImage from "../../assets/assets/Home-Hero-Image.jpg";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: `url(${HomeImage})`,
        backgroundSize: "cover",
        backgroundPosition: "-500px 20px",
        backgroundRepeat: "no-repeat",
        display: "flex",
        width: "45%",
        height: "963px",
    },
    // nav: {
    //     display: "flex",
    //     height: "200px",
    //     backgroundColor: "green"
    // },
    // title: {
    //     display: "flex",
    //     width: "55%",
    //     backgroundColor: "red",
    //     flexDirection:"column"
    // }

  }));

 const HomeHeader = () => {
    const classes = useStyles();
    return (
        <>
        <div className={classes.root}></div>
        <div className={classes.nav}>

        <Navigation/>
        <HeaderTitle />
        </div>
      
        
       </>
    )
}

export default HomeHeader