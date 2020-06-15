import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Nav from "./Nav";
import Pizza from "./Pizza";

function App() {
  return (
    <div className = "App">
      <Nav />
      <Pizza />
    </div>
  );
}

export default App;
