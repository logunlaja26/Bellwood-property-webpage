import React, { useEffect } from "react";
import { HomePage } from "./PageStructure/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Units from "./Admin/Units";
import Requests from "./Tenant/Requests";
import AdminPage from "./Admin/AdminPage";
import Newtenantform from "./Admin/Newtenantform";
import Displaytenants from "./Admin/Displaytenants";
import Login from "./Tenant/Login";
import Signup from "./Tenant/Signup";
import RedirectPage from "./RedirectPage";
import PasswordReset from "./Tenant/PasswordReset";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import { AuthProvider } from "./../contexts/AuthContext";

function MainPage() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>
            {/* Public Routes */}
            <Route component={HomePage} exact path="/" />
            <Route component={Login} path="/sign-in" />
            <Route component={Signup} path="/signup" />
            <Route component={PasswordReset} path="/reset-password" />
            <Route component={Units} exact path="/units" />
            <Route component={RedirectPage} path="/redirect" />

            {/* Tentant Routes */}
            <PrivateRoute component={Requests} path="/requests" />

            {/* Admin Routes */}
            <AdminRoute component={AdminPage} path="/adminpage" />
            <AdminRoute component={Newtenantform} path="/addtenant" />
            <AdminRoute component={Displaytenants} path="/tenants" />
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default MainPage;
