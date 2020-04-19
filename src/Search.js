import React from "react";

export default function Search({ handleInput, query }) {
  return (
    <form>
      <input onChange={handleInput} type="text" value={query} />
    </form>
  );
}
