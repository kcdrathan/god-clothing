import React from "react";

import SignIn from "../../components/signIn/signIn";
import SignUp from "../../components/signUp/signUp";

import "./signInUp.scss";

export default function SignInUp() {
  return (
    <div className="sign-in-up">
      <SignIn />
      <SignUp />
    </div>
  );
}
