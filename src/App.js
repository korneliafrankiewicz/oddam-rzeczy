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
import LogInComponent from './components/Home/LogInComponent';
import RegisterComponent from "./components/Home/RegisterComponent";
import LogOut from './components/Home/LogOut';

// var firebaseConfig = {
//   apiKey: "AIzaSyA6bXfSAlS27QfsnGYNFhNJFPKnAmomIBQ",
//   authDomain: "oddamrzeczy-e5ec4.firebaseapp.com",
//   projectId: "oddamrzeczy-e5ec4",
//   storageBucket: "oddamrzeczy-e5ec4.appspot.com",
//   messagingSenderId: "617098278530",
//   appId: "1:617098278530:web:d86a9bbcb135770a1aa69b"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);


function App() {
  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/logowanie" component={LogInComponent}/>
      <Route exact path="/rejestracja" component={RegisterComponent}/>
      <Route exact path="/wylogowano" component={LogOut}/>
      </Switch>
      </ThemeProvider> 
    </HashRouter>

  );
}

export default App;
