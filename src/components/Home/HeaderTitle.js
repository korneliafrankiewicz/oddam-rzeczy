import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import DecorationImg from "../../assets/assets/Decoration.svg" 

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
        fontSize: "2em",      
        border: "solid black 1px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        marginLeft: "30px"
    },
    span: {
        display: "flex",
        flexDirection: "column"
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
                <Button className={classes.button} >ODDAJ <span className={classes.span}> RZECZY</span> </Button>
                <Button className={classes.button}>ZORGANIZUJ ZBIÓRKĘ</Button>
            </div>
        </div>
        </Container>

     );
}
 
export default HeaderTitle;