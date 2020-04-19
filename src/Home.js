import React, { Component } from "react";
import SearchContainer from "./SearchContainer";
import "./Home.scss";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1>Hi there</h1>
        <SearchContainer />
      </div>
    );
  }
}
