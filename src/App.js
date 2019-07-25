import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import { Homepage, Shop, Authentication } from "pages";
import { Hats, Header } from "components";
import { auth } from "firebase/firebase.utils.js";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log("user", user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/authentication" component={Authentication} />
        </Switch>
      </div>
    );
  }
}

export default App;
