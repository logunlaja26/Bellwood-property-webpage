import React, { Component } from "react";
import Header from "../PageStructure/Header";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import firebase from "firebase";

const useStyles = (theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
});

export class AddTenantForm extends Component {
  addNewTenant = () => {
    const db = firebase.firestore();
    db.collection("tenants")
      .add({
        tenantId: "",
        email: "",
        adminId: "",
        role: "tenant",
        apartments: [
          {
            apartmentId: "105",
            address: "",
            rentAmount: 100.0,
            dueDate: "3",
            lateFees: 100.0,
            isPaid: true,
            occupied: true,
          },
        ],
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header />
        <form className={classes.root} noValidate autoComplete="off">
          <div>
            <TextField
              id="filled-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="filled"
            />
            <TextField
              id="filled-password-input"
              label="email"
              type="password"
              autoComplete="current-password"
              variant="filled"
            />
            <TextField
              id="filled-password-input"
              label="Rent"
              type="rent"
              autoComplete="current-password"
              variant="filled"
            />
          </div>
          <div>
            <TextField
              id="filled-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="filled"
            />
            <TextField
              id="filled-password-input"
              label="email"
              type="password"
              autoComplete="current-password"
              variant="filled"
            />
            <TextField
              id="filled-password-input"
              label="Rent"
              type="rent"
              autoComplete="current-password"
              variant="filled"
            />
            <button type="submit" onClick={this.addNewTenant}>
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withStyles(useStyles)(AddTenantForm);
