import React from 'react';
import Peopleimg from "../../assets/assets/People.jpg";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import DecorationImg from "../../assets/assets/Decoration.svg";
import SignatureImg from "../../assets/assets/Signature.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    position: "absolute",
    top: "1900px",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  },

  card: {
      backgroundColor: "#F0F1F1",
      display: "flex",
      width: "50%",
      justifyContent: "center",
      alignItems: "center"
  },
  content: {
    display: "flex",
    width: "55%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  title: {
    display: "flex",
    justifyContent: "center"

},
description: {
    lineHeight: "2em",
    fontSize: "1.4em",
    marginBottom: "20px"
},
decorationimg: {
    margin: "30px 0"
},

signatureimg: {
marginLeft: "350px"
},

  imgPeople: {
    display: "flex",
    width: "50%",
    backgroundImage: `url(${Peopleimg})`,
    height: "500px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },

  }));

const AboutUs = () => {
    const classes = useStyles()
    return ( 
        <div className={classes.root} id="about_us">
            <div className={classes.card}>
               
                <div className={classes.content}>
                <Typography className={classes.title} variant="h4">
                <h4>O nas</h4>
                </Typography>

                <div className={classes.decorationimg}>
                <img src={DecorationImg} />
                </div>

                    <p className={classes.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru</p>
                
                <div className={classes.signatureimg}>
                <img width="150px" src={SignatureImg} />
                </div>
                
                </div>
            </div>
            <div className={classes.imgPeople}></div>
        </div>
     );
}
 
export default AboutUs;