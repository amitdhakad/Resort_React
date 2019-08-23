import React from "react";

import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./pages/Home";
import SingleRoom from "./pages/SingleRoom";
import Rooms from "./pages/Rooms";
import Error from "./pages/Error";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Rooms/" component={Rooms} />
        <Route exact path="/Rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
