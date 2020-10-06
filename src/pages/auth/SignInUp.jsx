import React from "react";
import "./styles.scss";
import SignIn from "../../components/sign-in";
import SignUp from '../../components/sign-up'
const SignInUp = () => {
  return (
    <div className="sign-in-up">
      <SignIn />
      <SignUp/>
    </div>
  );
};

export default SignInUp;
