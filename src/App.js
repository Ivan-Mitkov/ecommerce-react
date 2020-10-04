import React from "react";
import "./App.css";
import {  Route, Link, Switch } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
      </Switch>
     
    </div>
  );
}

export default App;
