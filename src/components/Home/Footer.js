import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import "font-awesome/css/font-awesome.css";

const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      position: "absolute",
      bottom: "0",
      textAlign: "center",
      marginBottom: "20px"
    },

    }
    ))

const Footer = () => {
    const classes = useStyles();
    return ( 
        <div className={classes.root}>
          Copyright by Coders Lab
        
        </div>
     );
}
 
export default Footer;