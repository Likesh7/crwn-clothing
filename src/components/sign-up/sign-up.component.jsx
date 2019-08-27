import React, { Component } from "react";
import { FormInput, CustomButton } from "components";

import { auth, createUserProfileDocument } from "firebase/firebase.utils.js";

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

  submitHandler = async e => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("The passwords dont match");
      return;
    }

    try {
      const { user } = auth.createUserWithEmailAndPassword(email, password);

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      console.log(error);
    }
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
              type="password"
              value={this.state.confirmPassword}
              changeHandler={this.changeHandler}
              label="confirm Password"
              required
            />
          </div>

          <CustomButton type="submit">sign up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
