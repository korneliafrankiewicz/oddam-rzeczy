import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import DecorationImg from "../../assets/assets/Decoration.svg";
import Button from "@material-ui/core/Button";
import TableOption from "./TableOption";
import Fundation from "./Fundation";
import Organization from "./Organization";
import Collection from "./Collection";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        position: "absolute",
        top: "2450px",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        flexDirection: "column"
    },

    decorationimg: {
        margin: "30px 0"
    },
    buttons: {
        display: "flex",
        justifyContent: "center",
    },
    buttonOption: {
        fontSize: "1.6em",
        display: "flex",
        lineHeight: "30px",
        width: "220px",
        margin: "0 20px",
    
        "&:hover": {
            cursor: "pointer",
            border: "0.5px solid #3C3C3C"
        }
    },
    descriptionWrapper: {
        display: "flex",
        justifyContent: "center",
        margin: "30px 0",
    },
    description: {
        display: "flex",
        justifyContent: "center",
        lineHeight: "1.6em",
        fontSize: "1.2em",
        maxWidth: "500px",
       
    },
  }));

const WhoWeHelp = () => {
    const classes = useStyles();
    const [displayFund, setDisplayFund] = useState(true);
    const [displayOrg, setDisplayOrg] = useState(false);
    const [displayColl, setDisplayColl] = useState(false);
    
const handleClickFund = () => {
          setDisplayFund(true)
          setDisplayOrg(false)
          setDisplayColl(false)
}

const handleClickOrg = () => {
    setDisplayFund(false)
    setDisplayOrg(true)
    setDisplayColl(false)
}

const handleClickColl = () => {
    setDisplayFund(false)
    setDisplayOrg(false)
    setDisplayColl(true)
}

    return ( 
       
    <div id="who_we_help" className={classes.root}>
                <Typography className={classes.title} variant="h4">
                <h4>Komu pomagamy?</h4>
                </Typography>

                <div className={classes.decorationimg}>
                <img src={DecorationImg} />
                </div>

                <div className={classes.buttons}>
                    <Button onClick={handleClickFund} className={classes.buttonOption}>Fundacjom</Button>
                    <Button onClick={handleClickOrg} className={classes.buttonOption}>Organizacjom pozarządowym</Button>
                    <Button onClick={handleClickColl} className={classes.buttonOption}>Zbiórkom lokalnym</Button>
                </div>

                {displayFund && <Fundation />}
                {displayOrg && <Organization/>}
                {displayColl && <Collection />}

                {/* <div className={classes.descriptionWrapper}>
                    <p className={classes.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru</p>
                </div> */}

   
       
      </div>
     
     );
}
 
export default WhoWeHelp;