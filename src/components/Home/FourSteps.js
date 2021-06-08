import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import icon1 from "../../assets/assets/Icon-1.svg";
import icon2 from "../../assets/assets/Icon-2.svg";
import icon3 from "../../assets/assets/Icon-3.svg";
import icon4 from "../../assets/assets/Icon-4.svg";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        backgroundColor: "#F0F1F1",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        padding: "50px 0",
        textAlign: "center",
    },
    cards: {
        display: "flex",
        maxWidth: "70%",
        justifyContent: "space-between",
    },

    card: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "20%",
        justifyContent: "space-between"
    },

    title: {
        margin: "15px 0",
    }


  }));

const FourSteps = () => {
    const classes = useStyles()
    return (  <div className={classes.root}>
        <div className={classes.cards}>
        <div className={classes.card}>
            <img src={icon1}></img>
              <Typography  className={classes.title} variant="h6">
            <h6 >Wybierz rzeczy</h6>
            </Typography>
            <Typography variant="body2">
            <p>Ubrania, zabawki, sprzęt i inne</p>
            </Typography>
        </div>

        <div className={classes.card}>
            <img src={icon2}></img>
              <Typography  className={classes.title} variant="h6">
            <h6 >Wybierz rzeczy</h6>
            </Typography>
            <Typography variant="body2">
            <p>Ubrania, zabawki, sprzęt i inne</p>
            </Typography>
        </div>

        <div className={classes.card}>
            <img src={icon3}></img>
              <Typography  className={classes.title} variant="h6">
            <h6 >Wybierz rzeczy</h6>
            </Typography>
            <Typography variant="body2">
            <p>Ubrania, zabawki, sprzęt i inne</p>
            </Typography>
        </div>

        <div className={classes.card}>
            <img src={icon4}></img>
              <Typography  className={classes.title} variant="h6">
            <h6 >Wybierz rzeczy</h6>
            </Typography>
            <Typography variant="body2">
            <p>Ubrania, zabawki, sprzęt i inne</p>
            </Typography>
        </div>


        </div>
    


   
    </div> );
}
 
export default FourSteps;