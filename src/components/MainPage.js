import React, { Component } from "react";
import { HomePage } from "./PageStructure/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Units from "./Admin/Units";
import Requests from "./Tenant/Requests";
import AdminPage from "./Admin/AdminPage";
import Newtenantform from "./Admin/Newtenantform";
import Displaytenants from "./Admin/Displaytenants";
import TenantSignIn from "./Tenant/TenantSignIn";

function MainPage() {
  return (
    <div>
      <Switch>
        <Route component={Units} exact path="/units"></Route>
        <Route component={HomePage} exact path="/"></Route>
        <Route component={Requests} path="/requests"></Route>
        <Route component={AdminPage} path="/adminpage"></Route>
        <Route component={Newtenantform} path="/addtenant"></Route>
        <Route component={Displaytenants} path="/tenants"></Route>
        <Route component={TenantSignIn} path="/sign-in"></Route>
      </Switch>
    </div>
  );
}

export default MainPage;
