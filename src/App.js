import "./App.css";
import PropTypes from "prop-types";
import { Header } from "components";
import { connect } from "react-redux";
import React, { Component } from "react";
import { createStructuredSelector } from "reselect";
import { setCurrentUser } from "redux/user/user.action";
import { Route, Switch, Redirect } from "react-router-dom";
import { selectCurrentUser } from "redux/user/user.selectors";
import { Homepage, Shop, Authentication, Checkout } from "pages";
import { auth, createUserProfileDocument } from "firebase/firebase.utils.js";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          const currentUser = {
            id: snapShot.id,
            ...snapShot.data()
          };

          setCurrentUser(currentUser);
        });
      } else {
        setCurrentUser(userAuth);
      }
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
          <Route path="/shop" component={Shop} />
          <Route exact path="/checkout" component={Checkout} />
          <Route
            exact
            path="/authentication"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <Authentication />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps, { setCurrentUser })(App);
