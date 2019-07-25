import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ type, children, ...otherProps }) => {
  return (
    <button className="custom-button" type={type} {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
