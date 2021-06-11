import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Header from "../PageStructure/Header";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";

export default function Requests() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/");
    } catch (ex) {
      setError(`Failed to log out ${ex.message}`);
    }
  }

  return (
    <div>
      <Header />
      <h1>Requests</h1>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        onClick={handleLogout}
      >
        Logout
      </Button>
    </div>
  );
}
