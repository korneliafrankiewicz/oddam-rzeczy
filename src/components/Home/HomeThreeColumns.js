import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        position: "absolute",
        top: "963px",
        backgroundColor: "#FAD648",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        padding: "50px 0",
        textAlign: "center"

    },

    card: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "20%"
    },

    title: {
        margin: "15px 0",
        textTransform: "uppercase",
    }


  }));
const HomeThreeColumns = () => {
    const classes = useStyles()
    return ( 
        <div className={classes.root}>
    
            <div className={classes.card}>
                <Typography variant="h2">
                <h2>10</h2>
                </Typography>
                <Typography  className={classes.title} variant="h6">
                <h6 >Oddanych worków</h6>
                </Typography>
                <Typography variant="body1">
                <p>Lorem ipsum dolor sit amet, consectetur aolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisit </p>
                </Typography>
            </div>

            <div className={classes.card}>
                <Typography variant="h2">
                <h2>5</h2>
                </Typography>
                <Typography className={classes.title} variant="h6">
                <h6 >Wspartych organizacji</h6>
                </Typography>
                <Typography variant="body1">
                <p>Lorem ipsum dolor sit amet, consectetur aolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisit </p>
                </Typography>
            </div>

            <div className={classes.card}>
                <Typography variant="h2">
                <h2>7</h2>
                </Typography>
                <Typography className={classes.title} variant="h6">
                <h6 >Zorganizowanych zbiórek</h6>
                </Typography>
                <Typography variant="body1">
                <p>Lorem ipsum dolor sit amet, consectetur aolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisit </p>
                </Typography>
            </div>

       
        </div>
     );
}
 
export default HomeThreeColumns;