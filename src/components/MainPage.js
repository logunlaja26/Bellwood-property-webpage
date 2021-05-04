import React from "react";
import { HomePage } from "./PageStructure/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Units from "./Admin/Units";
import Requests from "./Tenant/Requests";
import AdminPage from "./Admin/AdminPage";
import Newtenantform from "./Admin/Newtenantform";
import Displaytenants from "./Admin/Displaytenants";
import Login from "./Tenant/Login";
import Signup from "./Tenant/Signup";
import PasswordReset from "./Tenant/PasswordReset";
import { AuthProvider } from "./../contexts/AuthContext";

function MainPage() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>
            <Route component={Units} exact path="/units"></Route>
            <Route component={HomePage} exact path="/"></Route>
            <Route component={Requests} path="/requests"></Route>
            <Route component={AdminPage} path="/adminpage"></Route>
            <Route component={Newtenantform} path="/addtenant"></Route>
            <Route component={Displaytenants} path="/tenants"></Route>
            <Route component={Login} path="/sign-in"></Route>
            <Route component={PasswordReset} path="/reset-password"></Route>
            <Route component={Signup} path="/signup"></Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default MainPage;
