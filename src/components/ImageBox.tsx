import React from "react";

function ImageBox() {
  return (
    <figure>
      <img
        width={200}
        className="mx-auto"
        src="/images/illustration-five-stars.webp"
        alt="five stars"
      />
      <figcaption className="text-yellow-100">
        Over 4,000 5-star reviews
      </figcaption>
    </figure>
  );
}

export default ImageBox;
