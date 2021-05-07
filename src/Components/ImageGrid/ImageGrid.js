import React from "react";
import UseFirestore from "../Firebase/UseFirestore";

import "./ImageGrid.scss";

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = UseFirestore("images");

  return (
    <div className="image-container">
      {docs &&
        docs.map((image) => {
          return (
            <div
              className="image"
              key={image.id}
              onClick={() => setSelectedImg(image.url)}
            >
              <img src={image.url} alt="uploaded pic" />
            </div>
          );
        })}
    </div>
  );
};

export default ImageGrid;
