import React from 'react';
import Login from "./Login";
import Menu from "./Menu";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },


  }));

const Navigation = () => {
    const classes = useStyles();
    return ( 
      <Container>
                <div className={classes.root}>
        <Login />
        <Menu />
        </div>
      </Container>


     );
}
 
export default Navigation;