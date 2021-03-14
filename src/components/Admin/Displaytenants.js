import React, { Component } from "react";
import Header from "../PageStructure/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import firebase from "firebase";

export class Displaytenants extends Component {
  constructor(props) {
    super(props);
    this.state = { tenantsList: [] };
  }

  componentDidMount() {
    var db = firebase.firestore();
    db.collection("tenants")
      .get()
      .then((snapshot) => {
        const tenantsList = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          tenantsList.push(data);
        });
        this.setState({ tenantsList: tenantsList });
      })
      .catch((error) => console.log(error));
    console.log("Data is being displayed.....");
  }

  render() {
    return (
      <div>
        <Header />
        <h1>Tenants</h1>
        <div className="container">
          <table id="example" className="display table">
            <thead className="thead-dark">
              <tr>
                <th>FirstName</th>
                <th>Lastname</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {this.state.tenantsList.map((tenant) => {
                return (
                  <tr>
                    <td>{tenant.firstName}</td>
                    <td>{tenant.lastName}</td>
                    <td>{tenant.email}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Displaytenants;
