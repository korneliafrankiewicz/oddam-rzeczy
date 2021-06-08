import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BackgroundContactImg from "../../assets/assets/Background-Contact-Form.jpg";


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
        height: "100vh",
        display: "block",
        opacity: "0.6"
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