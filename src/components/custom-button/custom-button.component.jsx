import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({
  type,
  children,
  isSignedInWithGoogle,
  ...otherProps
}) => {
  return (
    <button
      className={`${
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
