import './App.scss';
import React from "react";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';
import theme from '../src/theme';
import {ThemeProvider} from "@material-ui/core/styles";
import Home from "../src/components/Home/Home";
import Login from "../src/components/Home/Login";
import DonateButton from "../src/components/Home/DonateButton"

function App() {
  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/logowanie" component={Login}/>
      <Route exact path="/logowanie" component={DonateButton}/>
      </Switch>
      </ThemeProvider> 
    </HashRouter>

  );
}

export default App;
