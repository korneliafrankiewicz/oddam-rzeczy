import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import DecorationImg from "../../assets/assets/Decoration.svg";
import Button from "@material-ui/core/Button";
import TableOption from "./TableOption";

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
    
    const handleClick = (e) => {
        return (
            <h1>dwertfgdhyjm</h1>
        )
    }

    const Greet =(name) =>  {     
          console.log(`Hi there, ${name}`);
          <h1>{`Hi there, ${name}`}</h1>
          
        
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
                    <Button onClick={() => Greet("John")} className={classes.buttonOption}>Fundacjom</Button>
                    <Button className={classes.buttonOption}>Organizacjom pozarządowym</Button>
                    <Button className={classes.buttonOption}>Zbiórkom lokalnym</Button>
                </div>

                <div className={classes.descriptionWrapper}>
                    <p className={classes.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru</p>
                </div>

   
       
      </div>
     
     );
}
 
export default WhoWeHelp;