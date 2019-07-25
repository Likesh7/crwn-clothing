import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import { Homepage, Shop, Authentication } from "pages";
import { Hats, Header } from "components";
import "./App.css";

class App extends Component {
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
