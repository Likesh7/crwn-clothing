import React, { Fragment } from "react";
import "./form-input.styles.scss";

const FormInput = ({ label, changeHandler, name, value, type }) => {
  return (
    <Fragment>
      <input
        className="form-input"
        name={name}
        type={type}
        value={value}
        onChange={changeHandler}
      />
      {label ? (
        <label className={`${value.length ? "shrink" : ""} form-input-label`}>
          {label}
        </label>
      ) : null}
    </Fragment>
  );
};

export default FormInput;
