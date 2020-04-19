import React, { Component } from "react";
import Search from "./Search";
import axios from "axios";

export default class SearchContainer extends Component {
  state = {
    query: "duck",
    results: [],
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.query);

    axios
      .get("https://api.giphy.com/v1/gifs/search", {
        params: {
          q: this.state.query,
          api_key: "g7FJSuBOaK5Be2W7dM6NceeBQ29JmuoG",
        },
      })
      .then((response) => {
        console.log(response);

        this.setState({ results: response.data.data });
      });
  };

  handleInput = (event) => {
    this.setState({ query: event.target.value });
  };

  handleResult = () => {};

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
