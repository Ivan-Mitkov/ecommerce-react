import React, { useState } from "react";
import { signInWithGoogle } from "../../firebase/utils";
import FormInput from "../form-input";
import "./styles.scss";
import Button from "../button";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { email, password } = form;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setForm({ email: "", password: "" });
  };
  // console.log(form);
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
        <Button onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</Button>
              
        </div>
      </form>
    </div>
  );
};

export default SignIn;
