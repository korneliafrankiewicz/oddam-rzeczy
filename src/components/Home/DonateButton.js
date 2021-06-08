import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        
    },
 
    button: {
        fontSize: "2em",      
        border: "0.4px solid #3C3C3C",
        display: "flex",
        justifyContent: "center",
        marginLeft: "30px"
    },




  }));

const DonateButton = () => {
    const classes = useStyles();
    return ( 
        <Button className={classes.button}>ODDAJ RZECZY</Button>
     );
}
 
export default DonateButton;