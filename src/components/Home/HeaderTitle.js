import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import DecorationImg from "../../assets/assets/Decoration.svg";
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
        height: "883px",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        
    },
    titles: {
        textAlign: "center",
        height: "100px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around"
    },
    decorationimg: {
            marginTop: "40px"
    },
    buttons: {
        display: "flex",
        marginTop: "20px",
        justifyContent: "space-between",
    },
    button: {     
        border: "0.4px solid #3C3C3C",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        padding: "0.4em 2em",
        textDecoration: "none",
        width: "45%"
    },
    span: {
        display: "flex",
        flexDirection: "column",
        fontSize: "1.8em"
    },

  }));

const HeaderTitle = () => {
    const classes = useStyles();
    return ( 
        <Container>
            <div className={classes.root}>

            <Typography className={classes.titles} variant="h4">
            <h4>Zacznij pomagać!</h4>
            <h4>Oddaj niechciane rzeczy w zaufane ręce</h4>
            </Typography>

            <div className={classes.decorationimg}>
                <img src={DecorationImg} />
            </div>

            <div className={classes.buttons}>
            <Link to="/logowanie" className={classes.button}><Button  ><span className={classes.span}>ODDAJ <br/>RZECZY</span> </Button></Link>
            <Link to="/logowanie" className={classes.button}><Button  ><span className={classes.span}>ZORGANIZUJ <br/>ZBIÓRKĘ</span> </Button></Link> 
            </div>
        </div>
        </Container>

     );
}
 
export default HeaderTitle;