import React, { Component } from "react";
import { FormInput, CustomButton } from "components";
import { signInWithGoogle } from "firebase/firebase.utils.js";
import "./sign-in.styles.scss";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  submitHandler = e => {
    e.preventDefault();

    this.setState({ email: "", password: "" });
  };

  changeHandler = e => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h1 className="sign-in__header">I already have an account</h1>
        <span className="sign-in__subHeader">
          Sign in with your email and password
        </span>

        <form onSubmit={this.submitHandler}>
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

          <div className="buttons">
            <CustomButton type="submit">sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isSignedInWithGoogle>
              sign in with google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
