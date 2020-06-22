import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Nav from "./Nav";
import Pizza from "./Pizza";
 
function App() { //need class app extends component and then a render() here instead? 1h03 in tutorial.
  return (
    <Router>
      <div className = "App">
        <Nav />
        <Switch>
          <Route path = "/" exact component = {Home} />
          <Route path = "/pizza" component = {Pizza} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;