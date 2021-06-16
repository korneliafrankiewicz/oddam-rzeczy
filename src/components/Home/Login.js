import React from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
  } from 'react-router-dom';
  import LogInComponent from "./LogInComponent";


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        width:"55vw",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        height: "80px",
     
    },
    buttons: {
        display: "flex",
        marginRight: "140px"
    },
    btn: {
        display: "flex",
        fontSize: "0.9em",
        textDecoration: "none",
        border: "1px solid transparent",

        "&:hover": {
            border: "1px solid #FAD648",
            cursor: "pointer"
        },
    
    }

  }));

const Login  = () => {
    const classes = useStyles();
    return (
                   <div className={classes.root}>
                       <div className={classes.buttons}>
                        <Link to="/logowanie" className={classes.btn}>
                        <Button>Zaloguj</Button>
                        </Link>
                        
                        <Link to="/rejestracja" className={classes.btn}>
                        <Button>Załóż konto</Button>
                        </Link>

         
                        
                       </div>

                    </div>

 
     );
}
 
export default Login;