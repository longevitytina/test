import React from "react";

export default function Search({ handleInput, handleSubmit, query }) {
  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleInput} type="text" value={query} />
      <input type="submit" value="Submit" />
    </form>
  );
}
