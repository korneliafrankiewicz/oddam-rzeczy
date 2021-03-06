import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {ThemeProvider} from "@material-ui/core/styles";
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-scroll"

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        left: "45%",
        maxWidth: "55%",
        top: "80px",
        position: "absolute",
        alignItems: "center",
        justifyContent:"space-between",
        backgroundColor: "transparent",
    },
    menuButton: {
        "&:hover": {
            border: "0.5px solid #3C3C3C"
        }
        
    },
    menuLink: {
        padding: "15px",
        border: "1px solid transparent",
        "&:hover": {
            cursor: "pointer",
            border: "1px solid #3C3C3C"
        }
    }

  }));

const Menu = () => {
    const classes = useStyles();
    return ( 
       
        <AppBar color="primary" className={classes.root} >
            <Toolbar >
                <Link className={classes.menuLink} to="home_header" smooth={true} duration={1000}>Start</Link>
                <Link className={classes.menuLink} to="simple_steps" smooth={true} duration={1000}>O co chodzi?</Link>
                <Link className={classes.menuLink} to="about_us" smooth={true} duration={1000}>O nas</Link>
                <Link className={classes.menuLink} to="who_we_help" smooth={true} duration={1000}>Fundacja i organizacje</Link>
                <Link className={classes.menuLink} to="contact_form" smooth={true} duration={1000}>Kontakt</Link>
            </Toolbar>
        </AppBar>

     );
}
 
export default Menu;