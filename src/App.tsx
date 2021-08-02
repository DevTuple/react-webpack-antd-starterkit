import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./assets/stylesheets/app.css";

import { MainLayoutPage } from "./layout/MainLayoutPage";
export interface MainProps {}

const App: React.FunctionComponent = (props) => (
  <Router>
    <MainLayoutPage />
  </Router>
);
export default hot(module)(App);
