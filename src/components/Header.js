import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Requests from "./Requests";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
            <Button color="inherit">
              <Link to={"/Requests"}>Login</Link>
            </Button>
            <Button color="inherit">
              <Link to={"/AdminPage"}>Admin</Link>
            </Button>
            <Button color="inherit">
              <Link to={"/Units"}>Units</Link>
            </Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
