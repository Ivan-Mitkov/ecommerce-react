import React from "react";
import "./styles.scss";
const Button = ({ children,isGoogleSignIn, ...rest }) => {
  return <button className={["custom-button",isGoogleSignIn&&'google-sign-in'].join(' ')} {...rest}>
    {children}
  </button>;
};

export default Button;
