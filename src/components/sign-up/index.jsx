import React, { useState } from "react";
import {useDispatch} from 'react-redux'
import FormInput from "../form-input";
import Button from "../button";
// import { auth, createUserProfileDocument } from "../../firebase/utils";
import { signUpStart } from "../../redux/user/userActions";
import "./styles.scss";
const SignUp = () => {
  const dispatch=useDispatch()
  const [form, setForm] = useState({
    email: "",
    password: "",
    displayName: "",
    confirmPassword: "",
  });
  const { email, password, displayName, confirmPassword } = form;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    dispatch(signUpStart({email,password,displayName}))
    // try {
    //   const { user } = await auth.createUserWithEmailAndPassword(
    //     email,
    //     password
    //   );
    //   await createUserProfileDocument(user, { displayName });
      setForm({
        email: "",
        password: "",
        displayName: "",
        confirmPassword: "",
      });
    // } catch (error) {
    //   console.error(error.message);
    // }
  };
  // console.log(form);
  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          required
          handleChange={handleChange}
          label="Name"
        ></FormInput>
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
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          required
          handleChange={handleChange}
          label="Confirm Password"
        ></FormInput>
        <div className="buttons">
          <Button type="submit" value="Submit">
            Sign Up
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
