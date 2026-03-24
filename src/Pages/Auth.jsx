import React from "react";
import { useUser } from "@clerk/react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
function Auth({ children }) {
  const { isSignedIn } = useUser();

  return <div>{isSignedIn ? children : <Login />}</div>;
}

export default Auth;
