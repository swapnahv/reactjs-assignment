import React, { Component } from "react";
import Login from "./containers/login";
import Dashboard from "./containers/dashboard.js";
import Profile from "./containers/profile.js";
import { createStore } from "redux";
import allReducers from "./reducers/rootReducer.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/editProfile" component={Profile} />
        </div>
      </Router>
    );
  }
}

export default App;
