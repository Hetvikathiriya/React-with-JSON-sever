import React from "react";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/react";
import { RedirectToSignIn } from "@clerk/react";

function Login() {
  return (
    <RedirectToSignIn/>
  );
}

export default Login;