import React from "react";
import "./Results.scss";

export default function Results({ results }) {
  const giphyImages = results.map((image, index) => {
    const picture = image.images.fixed_width.url;
    return <img src={picture} alt={image.title} key={index} />;
  });
  return <div className="Results">{giphyImages}</div>;
}
