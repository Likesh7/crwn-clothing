import React, { Component } from "react";
import { FormInput, CustomButton } from "components";
import "./sign-up.styles.scss";

export class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  submitHandler = e => {
    e.preventDefault();

    this.setState({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
  };

  changeHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-up">
        <h1 className="sign-up__header">I dont have an account</h1>
        <span className="sign-up__subHeader">
          Sign up with your email and password
        </span>

        <form onSubmit={this.submitHandler}>
          <div className="form-group">
            <FormInput
              name="displayName"
              type="text"
              value={this.state.displayName}
              changeHandler={this.changeHandler}
              label="display Name"
              required
            />
          </div>

          <div className="form-group">
            <FormInput
              name="email"
              type="email"
              value={this.state.email}
              changeHandler={this.changeHandler}
              label="email"
              required
            />
          </div>

          <div className="form-group">
            <FormInput
              name="password"
              type="password"
              value={this.state.password}
              changeHandler={this.changeHandler}
              label="password"
              required
            />
          </div>

          <div className="form-group">
            <FormInput
              name="confirmPassword"
              type="confirmPassword"
              value={this.state.confirmPassword}
              changeHandler={this.changeHandler}
              label="confirm Password"
              required
            />
          </div>

          <CustomButton>sign up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
