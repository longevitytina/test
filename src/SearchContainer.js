import React, { Component } from "react";
import Search from "./Search";

export default class SearchContainer extends Component {
  state = {
    query: "default state",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.query);
  };

  handleInput = (event) => {
    this.setState({ query: event.target.value });
  };

  render() {
    return (
      <Search
        handleInput={this.handleInput}
        handleSubmit={this.handleSubmit}
        query={this.state.query}
      />
    );
  }
}
