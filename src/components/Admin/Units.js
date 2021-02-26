import React, { Component } from "react";
import Header from "../PageStructure/Header";
import firebase from "firebase";

export class Units extends Component {
  render() {
    const db = firebase.firestore();
    db.collection("tenants")
      .add({
        tenantId: "",
        email: "",
        adminId: "",
        role: "tenant",
        apartments: [
          {
            apartmentId: "101",
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
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default Units;
