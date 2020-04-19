import React from "react";
import "./Search.scss";

export default function Search({ handleInput, query }) {
  return (
    <form className="Search">
      <input onChange={handleInput} type="text" value={query} />
    </form>
  );
}
