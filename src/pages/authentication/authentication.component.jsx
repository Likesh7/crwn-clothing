import React from "react";
import { SignIn, SignUp } from "components";
import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="login-page">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Authentication;
