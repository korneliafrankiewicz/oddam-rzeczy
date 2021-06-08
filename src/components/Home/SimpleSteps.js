import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import SimpleStepsTitle from "../Home/SimpleStepsTitle"
import FourSteps from './FourSteps';
import Donate from "./Donate"

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        position: "absolute",
        top: "1330px",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        flexDirection: "column"

    },


  }));

const SimpleSteps = () => {
    const classes = useStyles();
    return ( 
        <div className={classes.root} id="simple_steps">
        <SimpleStepsTitle/>
        <FourSteps />
        <Donate />
        </div>
     );
}
 
export default SimpleSteps;