import React, { Component } from "react";
import Search from "./Search";

export default class SearchContainer extends Component {
  state = {
    query: " ",
    searching: false,
    results: null,
  };

  handleInput = (event) => {
    let query = event.target.value;
    this.setState({
      query,
      searching: false,
    });
    console.log("Query = ", this.state.query);
  };

  handleSubmit = (event) => {
    console.log("search:", this.state.query);
  };

  render() {
    return (
      <div>
        <div>
          <Search
            query={this.state.query}
            onInputChange={this.handleInput}
            onSubmit={this.handleSubmit}
          />
        </div>
        {/* <section>{results}</section> */}
      </div>
    );
  }
}
