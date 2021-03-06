import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/userActions";

import FormInput from "../form-input";
import "./styles.scss";
import Button from "../button";

const SignIn = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { email, password } = form;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(emailSignInStart({ email, password }));
  };
  const handleGoogleSignIn = () => {
    dispatch(googleSignInStart());
  };
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={email}
          required
          handleChange={handleChange}
          label="Email"
        ></FormInput>
        {/* <label>Email</label> */}
        <FormInput
          type="password"
          name="password"
          value={password}
          required
          handleChange={handleChange}
          label="Password"
        ></FormInput>
        <div className="buttons">
          <Button type="submit" value="Submit">
            Sign In
          </Button>
          {/* type='button' stop form asking for email  */}
          <Button
            type="button"
            onClick={handleGoogleSignIn}
            isGoogleSignIn={true}
          >
            Sign in with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
