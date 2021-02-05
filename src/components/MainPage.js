import React, { Component } from "react";
import { HomePage } from "./PageStructure/HomePage";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Requests from "./Tenant/Requests";
import AdminPage from "./Admin/AdminPage";

function MainPage() {
  return (
    <div>
      <Switch>
        <Route component={HomePage} exact path="/"></Route>
        <Route component={Requests} path="/requests"></Route>
        <Route component={AdminPage} path="/adminpage"></Route>
      </Switch>
    </div>
  );
}

export default MainPage;
