import React, { Component } from "react";

export default class Search extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <input
            type="text"
            name="search"
            value={this.props.query}
            onInput={this.props.onInputChange}
          />
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}
