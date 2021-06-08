import React from 'react';
import DonateButton from "../Home/DonateButton";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 0",
    },



  }));

const Donate = () => {
    const classes = useStyles()
    return ( 
        <div className={classes.root}>
            <DonateButton/>
        </div>
     );
}
 
export default Donate;