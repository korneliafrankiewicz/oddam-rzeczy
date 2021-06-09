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
        fontSize: "0.8em",
        "&:hover": {
            border: "0.5px solid #FAD648"
        },
    
    }

  }));

const Login  = () => {
    const classes = useStyles();
    return (
                   <div className={classes.root}>
                       <div className={classes.buttons}>
                        <Link to="/logowanie">
                        <Button className={classes.btn}>Zaloguj</Button>
                        </Link>
                        <Button className={classes.btn} >Załóż konto</Button>
                       </div>

                    </div>

 
     );
}
 
export default Login;