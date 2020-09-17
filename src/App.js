import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import USContacts from "./components/USContacts";
import AllContacts from "./components/AllContacts";

export default class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/us" component={USContacts} />
          <Route exact path="/all" component={AllContacts} />
        </Switch>
      </>
    );
  }
}
