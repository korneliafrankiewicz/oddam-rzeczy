import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DecorationImg from "../../assets/assets/Decoration.svg";
import Menu from "./Menu";
import Login from "./Login";

const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      position: "absolute",
      top: "0px",
      display: "flex",
      justifyContent: "center",
      textAlign: "center",
      height: "100%",
      top: "100px",
      flexDirection: "column"
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
      height: "150px",
      justifyContent: "space-between",
      alignItems: "center"

   },
    loginForm: {
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
    justifyContent: "center"
  },
  button: {
    adding: "15px",
        border: "1px solid transparent",
        "&:hover": {
            cursor: "pointer",
            border: "1px solid #3C3C3C"
        }
  }
  
  
    }));

const LogOut = () => {
    const classes = useStyles();
    return ( 
        <div className={classes.root}>
             <div className={classes.loginMenu}>
            <Login />
            <Menu />
            </div>
          <div className={classes.loginWrapper}>
         
        
                <Typography className={classes.title} variant="h4">
                <h4>Wylogowanie nastąpiło <br/> pomyślnie!</h4>
                </Typography>

                <div className={classes.decorationimg}>
                <img src={DecorationImg} />
                </div>

              

                <div className={classes.buttons}>
                    <Button className={classes.button}>Strona główna</Button>
                </div>
           </div> 
        </div>
     );
}
 
export default LogOut;