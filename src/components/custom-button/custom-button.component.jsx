import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({
  type,
  children,
  inverted,
  buttonClickHandler,
  isSignedInWithGoogle,
  ...otherProps
}) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""} ${
        isSignedInWithGoogle ? "sign-in-google" : ""
      } custom-button`}
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
