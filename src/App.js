import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shoppage/shoppage";
import SignInUp from "./pages/signInUp/signInUp";
import Header from "./components/header/header";
import { auth } from "./firebase/firebase.util";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
