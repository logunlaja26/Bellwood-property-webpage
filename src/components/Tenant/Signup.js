import React, { useRef } from "react";
import TextField from "@material-ui/core/TextField";
import { useAuth } from "../../contexts/AuthContext";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signup } = useAuth();

  async function onSignUp(e) {
    e.preventDefault();
    console.log(
      "Email:",
      emailRef.current.value,
      "Password: ",
      passwordRef.current.value
    );

    const user = await signup(
      emailRef.current.value,
      passwordRef.current.value
    );
    console.log(JSON.stringify(user));
  }

  return (
    <div>
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
