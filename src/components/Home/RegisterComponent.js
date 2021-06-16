import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DecorationImg from "../../assets/assets/Decoration.svg";
import TextField from '@material-ui/core/TextField';
import Navigation from "./Navigation";
import RegisterForm from '../../RegisterForm';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        height: "700px",
    },
  
    loginWrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
   loginMenu: {
     display: "flex",
     flexDirection: "column",

   },
   loginForm: {
    display: "flex",
    flexDirection: "column",
    padding: "40px",
    alignItems: "center",
  },
  inputs: {
    backgroundColor: "#F0F1F1",
    display: "flex",
    flexDirection: "column",
    padding: "40px",
    width: "320px",
  },
    input: {
      margin: "15px 0"
    },
    title: {
      display: "flex",
      justifyContent: "center"
  
  },
  decorationimg: {
      margin: "30px 0"
  },
  buttons: {
    marginTop: "30px",
    display: "flex",
    width: "450px",
    justifyContent: "space-between"
  },
  button: {
    adding: "15px",
        border: "1px solid transparent",
        "&:hover": {
            cursor: "pointer",
            border: "1px solid #3C3C3C"
        }
  },
  errorMessage: {
    color: "red",
    marginTop: "20px"
  },
  
  
    }));

const RegisterComponent = () => {
    const classes = useStyles();
    

    return ( 
        <div className={classes.root}>
             <div className={classes.loginMenu}>
             <Navigation />
            </div>
          <div className={classes.loginWrapper}>
         
        
                <Typography className={classes.title} variant="h4">
                <h4>Załóż konto</h4>
                </Typography>

                <div className={classes.decorationimg}>
                <img src={DecorationImg} />
                </div>

     
            <RegisterForm/>
            
       
           </div> 
        </div>
     );
}
 
export default RegisterComponent;