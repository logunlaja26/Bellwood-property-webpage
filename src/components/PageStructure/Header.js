import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  buttonBackground: {
    color: "red",
  },

  title: {
    flexGrow: 5,
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Button className={classes.buttonBackground} variant="contained">
              <Link style={{ textDecoration: "none" }} to={"/sign-in"}>
                Login
              </Link>
            </Button>
            <Button color="inherit" variant="contained">
              <Link style={{ textDecoration: "none" }} to={"/AdminPage"}>
                Admin
              </Link>
            </Button>
            <Button color="inherit" variant="contained">
              <Link style={{ textDecoration: "none" }} to={"/Units"}>
                Units
              </Link>
            </Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
