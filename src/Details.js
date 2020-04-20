import React from "react";
import { withRouter } from "react-router-dom";

function Details({ location: { state } }) {
  const { image, created, title } = state;
  return (
    <div>
      <p>{title}</p>
      <img src={image} alt={title} />
      <p>{created}</p>
    </div>
  );
}

export default withRouter(Details);
