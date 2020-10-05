import React from "react";
import "./styles.scss";
const Button = ({ children, ...rest }) => {
  return <button className="custom-button" {...rest}>
    {children}
  </button>;
};

export default Button;
