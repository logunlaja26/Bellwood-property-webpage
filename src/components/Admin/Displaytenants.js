import React, { Component } from "react";
import Header from "../PageStructure/Header";
import firebase from "firebase";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export class Displaytenants extends Component {
  constructor(props) {
    super(props);
    this.state = { tenantsList: [], isLoading: true };
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
        this.setState({ tenantsList: tenantsList, isLoading: false });
      })
      .catch((error) => console.log(error));
    console.log("Data is being displayed.....");
  }

  render() {
    const { classes } = this.props;
    return this.state.isLoading ? (
      <CircularProgress disableShrink />
    ) : (
      <div>
        <Header />
        <h1>Tenants</h1>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>FirstName</StyledTableCell>
                <StyledTableCell align="center">Lastname</StyledTableCell>
                <StyledTableCell align="center">Email</StyledTableCell>
                <StyledTableCell align="center">Apartment</StyledTableCell>
                <StyledTableCell align="center">Rent</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.tenantsList.map((tenant) => (
                <StyledTableRow key={tenant.lastName}>
                  <StyledTableCell align="left">
                    {tenant.firstName}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {tenant.lastName}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {tenant.email}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {tenant.apartment}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {tenant.rent}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}
export default withStyles(useStyles)(Displaytenants);
