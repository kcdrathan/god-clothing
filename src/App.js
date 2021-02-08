import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/homepage";
import ShopPage from "./pages/shoppage";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
