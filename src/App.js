import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <h1>Pepe's Pizzeria</h1>
      <p>Build Some Slices</p>
      <div>
        <ul>
          <li>
            <Link to = "/">Home</Link>
          </li>
          <li>
            <Link to = "/pizza">Pizza Form</Link>
          </li>
        </ul>
      </div>
    </Router>
  );
};

export default App;
