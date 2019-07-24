import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import { Homepage, Shop } from "pages";
import { Hats } from "components";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={Shop} />
        </Switch>
      </div>
    );
  }
}

export default App;
