import React from 'react';
import DecorationImg from "../../assets/assets/Decoration.svg";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {

    },
 
    decorationimg: {
            margin: "30px 0"
    },




  }));

const SimpleStepsTitle = () => {
    const classes = useStyles();
    return (
        <div>
        <Typography className={classes.titles} variant="h4">
        <h4>Wystarczą 4 proste kroki</h4>
        </Typography>
          <div className={classes.decorationimg}>
          <img src={DecorationImg} />
      </div>
        </div> 
     
     );
}
 
export default SimpleStepsTitle;