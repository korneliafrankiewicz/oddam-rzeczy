import './App.scss';
import React from "react";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';
import {Home} from "../src/components/Home/Home"

function App() {
  return (
    <HashRouter>
      <>
      <Route exact path="/" component={Home}/>
      </>
    </HashRouter>

  );
}

export default App;
