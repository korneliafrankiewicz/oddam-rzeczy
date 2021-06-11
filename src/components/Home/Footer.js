import React from 'react';
import { makeStyles } from '@material-ui/core/styles';




const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      position: "absolute",
      bottom: "0",
      textAlign: "center",
      marginBottom: "20px",
      fontSize: "1.2em"
    },
    footer: {
      display: "flex",
      justifyContent: "center"
    },
    socialIcons: {
      position: "absolute",
      right: "40px",
      fontSize: "1.5em"
    },
    icon: {
      marginLeft: "15px",
      "&:hover": {
        cursor: "pointer",
    }
    }

    }
    ))

const Footer = () => {
    const classes = useStyles();
    return ( 
        <div className={classes.root}>

          <div className={classes.footer}>
            Copyright by Coders Lab
            <div className={classes.socialIcons}>
              <span className={classes.icon}><i  className="fab fa-facebook-square"></i></span>
              <span className={classes.icon}><i className="fab fa-instagram"></i></span>
            </div>
          </div>
      
         
        
        </div>
     );
}
 
export default Footer;