import React, { Component } from "react";
import Header from "../PageStructure/Header";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import firebase from "firebase";
import Button from "@material-ui/core/Button";
//import "./../../App.css";

const useStyles = (theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: 500,
    },
  },
});

export class Newtenantform extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      apartment: "",
      rent: "",
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  addNewTenant = (e) => {
    e.preventDefault();
    const {
      tenantId,
      firstName,
      lastName,
      email,
      apartment,
      rent,
    } = this.state;
    const db = firebase.firestore();
    db.collection("tenants")
      .add({
        firstName,
        lastName,
        email,
        apartment,
        rent,
      })
      .then((docRef) => {
        const tenantDocId = docRef.id;
        // access admins collection (db.collection)
        // add tenant Id to the admins tenant list
        // will be an update
        this.setState({
          firstName: firstName,
          lastName: lastName,
          email: email,
          apartment: apartment,
          rent: rent,
        });

        console.log("Document written with ID: ", tenantDocId);
        db.collection("Admins")
          .doc("DUkPtHOBinmfefVXeTxd")
          .update({
            tentants: firebase.firestore.FieldValue.arrayUnion(tenantDocId),
          });
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
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={this.addNewTenant}
        >
          <div>
            <TextField
              id="filled-password-input"
              label="First Name"
              name="firstName"
              type="text"
              variant="filled"
              value={this.state.firstName}
              onChange={this.onChange}
            />
            <TextField
              id="filled-password-input"
              label="Last Name"
              name="lastName"
              type="text"
              variant="filled"
              value={this.state.lastName}
              onChange={this.onChange}
            />
          </div>
          <div>
            <TextField
              id="filled-password-input"
              label="Email"
              name="email"
              type="text"
              autoComplete="current-password"
              variant="filled"
              value={this.state.email}
              onChange={this.onChange}
            />
            <TextField
              id="filled-password-input"
              label="Apartment"
              name="apartment"
              type="text"
              variant="filled"
              value={this.state.apartment}
              onChange={this.onChange}
            />
            <TextField
              id="filled-password-input"
              label="Rent"
              name="rent"
              type="text"
              variant="filled"
              value={this.state.rent}
              onChange={this.onChange}
            />
          </div>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

export default withStyles(useStyles)(Newtenantform);
