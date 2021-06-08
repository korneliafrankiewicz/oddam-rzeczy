import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { createStyles, WithStyles, withStyles, Typography } from '@material-ui/core';
import DecorationImg from "../../assets/assets/Decoration.svg";
import BackgroundContactImg from "../../assets/assets/Background-Contact-Form.jpg";

const styles = () =>
  createStyles({
    h: {
      '&::before': {
        content: '"some content"',
        backgroundImage: `url(${BackgroundContactImg})`,
      }
    }
  });

const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      position: "absolute",
      top: "3000px",
      '&::before': {
        content: '""',
        backgroundImage: `url(${BackgroundContactImg})`,
        backgroundSize: "cover",
        width: "100%",
        height: "100vh"
      }
  
    },
  

  
    }));
const ContactForm = () => {
    const classes = useStyles()
    return ( 
        <div className={classes.root} id="contact_form">

        </div>
     );
}
 
export default ContactForm;