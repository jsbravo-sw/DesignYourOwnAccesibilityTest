import React, { useState, useEffect } from "react";
import NavBar from "./layout/NavBar.js";
import CheckYourAPPForm from "./layout/CheckYourAPP/CheckYourAPPForm.js";
import Home from "./layout/Home/Home.js";
import TestWebsites from "./layout/TestWebsites/TestWebsites.js";
import MyTests from "./layout/MyTests/MyTests.js";
import Encuesta from "./layout/Encuesta.js";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/auth/getUser")
      .then((res) => res.json())
      .then((user) => {
        setUser(user);
      });
  }, []);

  return (
    <Router>
      <NavBar user={user}></NavBar>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/gettesting">
          <TestWebsites />
        </Route>
        <Route exact path="/createyourowntest">
          <CheckYourAPPForm user={user} />
        </Route>
        <Route exact path="/mytests">
          <MyTests user={user} />
        </Route>
        <Route path="/desginyourownusabilitytes.com/:id">
          <Encuesta />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
