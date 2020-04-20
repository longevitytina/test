import React, { Component } from "react";
import SearchContainer from "./SearchContainer";
import "./Home.scss";
import { Route, Switch } from "react-router-dom";
import Details from "./Details";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1>Hi there</h1>
        <Switch>
          <Route path="/details/:id" component={Details} />
          <Route path="/" component={SearchContainer} />
        </Switch>
      </div>
    );
  }
}
