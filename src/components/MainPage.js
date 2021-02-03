import React, { Component } from "react";
import Homepage, { HomePage } from "./HomePage";
import Adminpage from "./AdminPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Requests from "./Requests";
import AdminPage from "./AdminPage";
import Header from "./Header";
import Footer from "./Footer";

function MainPage() {
  return (
    <div>
      <switch>
        <Route component={HomePage} exact path="/"></Route>
        <Route component={Requests} path="/requests"></Route>
        <Route component={AdminPage} path="/adminpage"></Route>
      </switch>
    </div>
  );
}

export default MainPage;
