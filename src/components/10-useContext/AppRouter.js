import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./HomeScreen";
import AboutScreen from "./AboutScreen";
import LoginScreen from "./LoginScreen";
import NavBar from "./NavBar";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/about" component={AboutScreen} />
          <Route exact path="/login" component={LoginScreen} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;

//* También se puede enviar como children.
/* 
<Route exact path="/about">
  <AboutScreen />
</Route>; 
*/
