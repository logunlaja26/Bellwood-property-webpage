import React, { useRef, useState } from "react";
import Alert from "@material-ui/lab/Alert";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { useAuth } from "../../contexts/AuthContext";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Signup() {
  const classes = useStyles();
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signup } = useAuth();
  const [message, setMessage] = useState("");

  async function onSignUp(e) {
    e.preventDefault();
    console.log(
      "Email:",
      emailRef.current.value,
      "Password: ",
      passwordRef.current.value
    );

    try {
      setMessage("");
      const user = await signup(
        emailRef.current.value,
        passwordRef.current.value
      );
      console.log(JSON.stringify(user));
      setMessage("Successfully signed up");
    } catch (error) {
      console.log(error.message);
      setMessage(error.message);
    }
  }

  return (
    <div>
      <div className={classes.root}>
        {message && (
          <Alert severity="success">
            <strong>{message}</strong>
          </Alert>
        )}
      </div>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        type="email"
        inputRef={emailRef}
      />

      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        inputRef={passwordRef}
      />
      <button onClick={onSignUp}>Sign up</button>
    </div>
  );
}
