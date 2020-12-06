import { Route, Switch } from "react-router-dom";
import React from "react";
import Home from "./Home";
import About from "./About";
import Users from "./Users";
import NotFound from "./NotFound";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/user/:firstName/:lastName" component={Users} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default App;
