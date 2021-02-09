import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Header from "../PageStructure/Header";
import { Link } from "react-router-dom";

export class AdminPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Button variant="contained" color="inherit">
          <Link style={{ textDecoration: "none" }} to={"/addtenant"}>
            Admin
          </Link>
        </Button>
      </div>
    );
  }
}

export default AdminPage;
