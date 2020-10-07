import React from "react";
import "./styles.scss";
const Button = ({ children, inverted, isGoogleSignIn, ...rest }) => {
  return (
    <button
      className={[
        "custom-button",
        isGoogleSignIn && "google-sign-in",
        inverted && "inverted",
      ].join(" ")}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
