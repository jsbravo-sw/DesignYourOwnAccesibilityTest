import React, { useState, useEffect } from "react";
import NavBar from "./layout/NavBar.js";
import CheckYourAPPForm from "./layout/CheckYourAPP/CheckYourAPPForm.js";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/auth/getUser")
      .then((res) => res.json())
      .then((user) => {
        console.log("APPUSER", user);
        setUser(user);
      });
  }, []);

  return (
    <Router>
      <NavBar user={user}></NavBar>
      <CheckYourAPPForm></CheckYourAPPForm>
      <Switch></Switch>
    </Router>
  );
};

export default App;
