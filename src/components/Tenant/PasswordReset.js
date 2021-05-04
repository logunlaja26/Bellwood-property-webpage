import React, { useRef, useState } from "react";
import Alert from "@material-ui/lab/Alert";
import Link from "@material-ui/core/Link";
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

export default function PasswordReset() {
  const classes = useStyles();
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [message, setMessage] = useState("");

  async function onPasswordReset(e) {
    e.preventDefault();
    console.log("Email:", emailRef.current.value);
    try {
      setMessage("");
      await resetPassword(emailRef.current.value);
      setMessage("check your inbox for further instructions");
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
      <button onClick={onPasswordReset}>Submit</button>
      <div>
        <Link href="/sign-in" variant="body2">
          {"Login"}
        </Link>
      </div>
    </div>
  );
}
