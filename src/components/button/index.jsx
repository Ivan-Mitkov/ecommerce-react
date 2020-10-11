import React from "react";
import "./styles.scss";
import { CustomButtonContainer } from "./styles";

const Button = (props) => {
  // console.log('isGoogle',props.isGoogleSignIn, 'inverted',props.inverted)
  return <CustomButtonContainer {...props}>{props.children}</CustomButtonContainer>;
};

export default Button;
