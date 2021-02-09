import React from "react";
import Header from "../PageStructure/Header";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export default function AddTenantForm() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <Header />
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
      </div>
    </form>
  );
}
