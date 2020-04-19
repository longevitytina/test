import React, { Component } from "react";

export default class Search extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onInput={this.handleInput} type="text" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
