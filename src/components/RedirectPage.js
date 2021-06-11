import React, { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";

export default function RedirectPage() {
  const { currentUser } = useAuth();
  const history = useHistory();

  const isAdmin = () => {
    return currentUser.email === "logunlaja26@gmail.com";
  };

  useEffect(() => {
    if (!currentUser) return;

    console.log(`REDIRECT PAGE- current user email: ${currentUser.email}`);

    if (isAdmin()) {
      history.push("/adminpage");
    } else {
      history.push("/requests");
    }
  }, [currentUser]);

  return <> Loading... </>;
}
