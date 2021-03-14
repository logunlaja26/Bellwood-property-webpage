import React, { Component } from "react";
import Header from "../PageStructure/Header";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import firebase from "firebase";
//import "./../../App.css";

const useStyles = (theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
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
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  addNewTenant = (e) => {
    e.preventDefault();
    const { tenantId, firstName, lastName, email } = this.state;
    const db = firebase.firestore();
    db.collection("tenants")
      .add({
        firstName,
        lastName,
        email,
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
              autoComplete="current-password"
              variant="filled"
              value={this.state.firstName}
              onChange={this.onChange}
            />
            <TextField
              id="filled-password-input"
              label="Last Name"
              name="lastName"
              type="text"
              autoComplete="current-password"
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
          </div>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default withStyles(useStyles)(Newtenantform);
