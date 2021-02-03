import React, { Component } from "react";
import Requests from "./Requests";
import AdminPage from "./AdminPage";
import Header from "./Header";
import Footer from "./Footer";

export class HomePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <button>Login</button>
          <button>Admin</button>
        </div>
      </div>
    );
  }
}

export default HomePage;
