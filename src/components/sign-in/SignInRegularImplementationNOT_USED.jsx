import React, { useState } from "react";
import { auth, signInWithGoogle } from "../../firebase/utils";
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
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setForm({
        email: "",
        password: "",
      });
    } catch (error) {
      console.error(error.message);
    }
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
            onClick={signInWithGoogle}
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
