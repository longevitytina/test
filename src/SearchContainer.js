import React, { Component } from "react";
import Search from "./Search";
import axios from "axios";
import Results from "./Results";

export default class SearchContainer extends Component {
  state = {
    query: "duck",
    results: [],
  };

  handleSubmit = () => {
    axios
      .get("https://api.giphy.com/v1/gifs/search", {
        params: {
          q: this.state.query,
          api_key: "g7FJSuBOaK5Be2W7dM6NceeBQ29JmuoG",
        },
      })
      .then((response) => {
        console.log(response);

        this.setState({
          results: response.data.data,
        });
      });
  };

  handleInput = (event) => {
    this.setState({ query: event.target.value }, () => {
      this.handleSubmit(event);
    });
  };

  render() {
    return (
      <React.Fragment>
        <Search handleInput={this.handleInput} query={this.state.query} />
        <Results results={this.state.results} />
      </React.Fragment>
    );
  }
}
