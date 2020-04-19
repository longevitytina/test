import React from "react";

export default function Results({ results }) {
  const giphyImages = results.map((image, index) => {
    const picture = image.images.preview_gif.url;
    return <img src={picture} alt={image.title} key={index} />;
  });
  return <div>{giphyImages}</div>;
}
