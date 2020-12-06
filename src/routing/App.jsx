import { Route, Switch, Redirect } from "react-router-dom";
import React from "react";
import Home from "./Home";
import About from "./About";
import Users from "./Users";
import Searching from "./Search";


const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/user/:firstName/:lastName" component={Users} />
        <Redirect to="/" />
      </Switch>
      <Searching />
    </>
  );
};

export default App;
