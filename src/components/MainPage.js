import React, { Component } from "react";
import { HomePage } from "./PageStructure/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Units from "./Admin/Units";
import Requests from "./Tenant/Requests";
import AdminPage from "./Admin/AdminPage";
import Newtenantform from "./Admin/Newtenantform";
import Displaytenants from "./Admin/Displaytenants";
import Login from "./Tenant/Login";

function MainPage() {
  return (
    <div>
      <Router>
        <Switch>
          <Route component={Units} exact path="/units"></Route>
          <Route component={HomePage} exact path="/"></Route>
          <Route component={Requests} path="/requests"></Route>
          <Route component={AdminPage} path="/adminpage"></Route>
          <Route component={Newtenantform} path="/addtenant"></Route>
          <Route component={Displaytenants} path="/tenants"></Route>
          <Route component={Login} path="/sign-in"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default MainPage;
